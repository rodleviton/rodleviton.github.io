import { PlusIcon } from "@/components/icons/plus";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex gap-8">
      <div className="text-accent flex items-center w-34 min-w-34 justify-end">
        <PlusIcon size="sm" />
      </div>
      <div className="flex w-full gap-8 items-center">
        <h2 className="text-xl whitespace-nowrap font-bold font-heading uppercase">
          {title}
        </h2>
        <div className="flex w-full h-px bg-foreground"></div>
      </div>
    </div>
  );
}
