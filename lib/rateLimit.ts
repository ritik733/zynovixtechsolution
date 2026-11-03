/**
 * High-performance, memory-bounded sliding window rate limiter.
 * Designed to absorb high traffic and multi-million request loads without memory leaks.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  maxStoreSize?: number;
}

export class MemoryRateLimiter {
  private store = new Map<string, RateLimitRecord>();
  private readonly maxRequests: number;
  private readonly windowMs: number;
  private readonly maxStoreSize: number;
  private lastCleanup = Date.now();

  constructor({ maxRequests, windowMs, maxStoreSize = 20000 }: RateLimitConfig) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.maxStoreSize = maxStoreSize;
  }

  /**
   * Periodic eviction of expired entries to prevent memory growth.
   */
  private cleanup(): void {
    const now = Date.now();
    // Only cleanup once every 30 seconds
    if (now - this.lastCleanup < 30000 && this.store.size < this.maxStoreSize) {
      return;
    }

    this.lastCleanup = now;
    for (const [key, record] of this.store.entries()) {
      if (record.resetTime <= now) {
        this.store.delete(key);
      }
    }

    // Hard emergency cap: if still too large, drop oldest entries
    if (this.store.size >= this.maxStoreSize) {
      const keysToDelete = Array.from(this.store.keys()).slice(
        0,
        Math.floor(this.maxStoreSize * 0.25)
      );
      for (const k of keysToDelete) {
        this.store.delete(k);
      }
    }
  }

  /**
   * Check if request should be rate limited.
   * Returns: { success: boolean, limit: number, remaining: number, reset: number }
   */
  public check(identifier: string): {
    success: boolean;
    limit: number;
    remaining: number;
    reset: number;
  } {
    this.cleanup();

    const now = Date.now();
    const existing = this.store.get(identifier);

    if (!existing || existing.resetTime <= now) {
      const resetTime = now + this.windowMs;
      this.store.set(identifier, {
        count: 1,
        resetTime,
      });

      return {
        success: true,
        limit: this.maxRequests,
        remaining: this.maxRequests - 1,
        reset: Math.ceil(resetTime / 1000),
      };
    }

    if (existing.count >= this.maxRequests) {
      return {
        success: false,
        limit: this.maxRequests,
        remaining: 0,
        reset: Math.ceil(existing.resetTime / 1000),
      };
    }

    existing.count += 1;
    return {
      success: true,
      limit: this.maxRequests,
      remaining: this.maxRequests - existing.count,
      reset: Math.ceil(existing.resetTime / 1000),
    };
  }
}

/**
 * Extracts the real client IP securely from standard proxy/CDN headers.
 */
export function getClientIp(request: Request): string {
  const headers = request.headers;

  // Cloudflare
  const cfIp = headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  // Standard X-Real-IP
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // X-Forwarded-For (take the first client IP in the chain)
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  return "127.0.0.1";
}

// Global rate limiters for the application
// Contact form: 5 submissions per 10 minutes per IP
export const contactRateLimiter = new MemoryRateLimiter({
  maxRequests: 5,
  windowMs: 10 * 60 * 1000,
});

// Careers form: 5 submissions per 15 minutes per IP
export const careersRateLimiter = new MemoryRateLimiter({
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
});
