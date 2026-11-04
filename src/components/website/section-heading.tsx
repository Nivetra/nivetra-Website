import { Eyebrow } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-bold sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08]">
        {title}
      </h2>
      {lead && (
        <p className={cn("max-w-2xl text-lg leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {lead}
        </p>
      )}
    </div>
  );
}
