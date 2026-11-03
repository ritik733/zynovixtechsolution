/**
 * Security utilities for input validation, sanitization, anti-spam, and CSRF protection.
 */

// Basic RFC 5322 compliant email regex
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Escapes characters to prevent Cross-Site Scripting (XSS) and HTML injection.
 */
export function escapeHtml(value: string): string {
  if (!value) return "";
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#96;");
}

/**
 * Validates and sanitizes email addresses.
 * Crucially strips CRLF characters (\r, \n) to eliminate SMTP Header Injection vulnerabilities.
 */
export function sanitizeEmail(email: unknown): string | null {
  if (typeof email !== "string") return null;

  // Strip all whitespace and control characters
  const cleanEmail = email.trim().replace(/[\r\n\t]/g, "");

  if (cleanEmail.length < 5 || cleanEmail.length > 120) {
    return null;
  }

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return null;
  }

  return cleanEmail;
}

/**
 * Sanitizes generic textual fields, clamping to a maximum safe length
 * and stripping null bytes / dangerous control characters.
 */
export function sanitizeText(
  value: unknown,
  maxLength: number,
  fallback = ""
): string {
  if (typeof value !== "string") {
    if (value === undefined || value === null) return fallback;
    return String(value).slice(0, maxLength).trim();
  }

  // Remove null bytes and non-printable control characters (except standard newlines/tabs)
  const cleaned = value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
  return cleaned.slice(0, maxLength).trim();
}

/**
 * Checks if an automated spam bot triggered a honeypot field.
 */
export function isHoneypotTriggered(payload: Record<string, unknown>): boolean {
  const honeypotKeys = [
    "website",
    "b_name",
    "honeypot",
    "fax",
    "company_fax",
    "address2",
  ];

  for (const key of honeypotKeys) {
    const val = payload[key];
    if (typeof val === "string" && val.trim().length > 0) {
      return true;
    }
  }

  return false;
}

/**
 * Validates request Origin and Referer to block unauthorized Cross-Site Request Forgery (CSRF).
 */
export function validateTrustedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    // Non-browser or same-origin direct request without origin header
    return true;
  }

  try {
    const originUrl = new URL(origin);
    const originHost = originUrl.host.toLowerCase();
    const currentHost = host.toLowerCase();

    // Allow exact same host
    if (originHost === currentHost) return true;

    // Allow production domains and subdomains
    if (
      originHost === "zynovixtechsolutions.com" ||
      originHost.endsWith(".zynovixtechsolutions.com")
    ) {
      return true;
    }

    // Allow local development
    if (
      originHost.startsWith("localhost") ||
      originHost.startsWith("127.0.0.1") ||
      originHost.endsWith(".local")
    ) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * Verifies that the Content-Length header is within acceptable limits.
 */
export function isPayloadSizeValid(
  request: Request,
  maxBytes: number
): boolean {
  const contentLength = request.headers.get("content-length");
  if (!contentLength) return true;

  const parsed = parseInt(contentLength, 10);
  if (isNaN(parsed)) return true;

  return parsed <= maxBytes;
}
