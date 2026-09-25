/**
 * Utility to safely detect WebGL support before mounting any Three.js canvas.
 * Prevents fatal "A WebGL context could not be created" errors from taking down the app.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl && gl instanceof WebGLRenderingContext || (typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext));
  } catch {
    return false;
  }
}
