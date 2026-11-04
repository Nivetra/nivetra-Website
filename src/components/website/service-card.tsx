import { createElement } from "react";
import { getServiceIcon } from "@/config/service-icons";
import type { Service } from "@/config/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_40px_-24px_rgba(27,45,100,0.4)]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
        {createElement(getServiceIcon(service.icon), { className: "h-6 w-6" })}
      </span>
      <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
    </div>
  );
}
