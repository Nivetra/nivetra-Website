import {
  Code2,
  BrainCircuit,
  AppWindow,
  Smartphone,
  Cloud,
  Plug,
  LineChart,
  PenTool,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Icons are stored as string names (serializable — so service data can flow
 * through `"use cache"` queries) and resolved to components at render time.
 */
export const SERVICE_ICONS = {
  Code2,
  BrainCircuit,
  AppWindow,
  Smartphone,
  Cloud,
  Plug,
  LineChart,
  PenTool,
  Boxes,
} as const;

export type ServiceIconName = keyof typeof SERVICE_ICONS;

export function getServiceIcon(name?: string | null): LucideIcon {
  return SERVICE_ICONS[name as ServiceIconName] ?? Boxes;
}
