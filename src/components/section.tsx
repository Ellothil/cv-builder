/**
 * SectionTitle component renders a styled title for a resume section.
 */
export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-1 inline-block border-blue-600 border-b-2 pb-1 font-bold text-slate-800 text-xl uppercase tracking-widest">
      {title}
    </h2>
  );
}

/**
 * SectionContent component renders a container for the content of a resume section.
 */
export function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 flex flex-col gap-2">{children}</div>;
}

/**
 * SectionPeriod component renders a badge displaying a time period.
 * It returns null if no period is provided.
 */
export function SectionPeriod({ period }: { period: string | undefined }) {
  if (!period) {
    return <div />;
  }
  return (
    <span className="ml-2 shrink-0 whitespace-nowrap rounded bg-slate-100 px-2 py-0.5 font-mono text-slate-500 text-xs">
      {period}
    </span>
  );
}
