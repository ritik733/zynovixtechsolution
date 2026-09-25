import type { ReactNode } from "react";

/**
 * Reveal wrapper that guarantees 100% visibility of all children without risk of
 * elements getting trapped at opacity: 0 due to scroll or animation issues.
 */
export default function Reveal3D({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  rotate?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}