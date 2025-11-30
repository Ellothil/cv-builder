/**
 * SkillBlock component displays a category title and a list of skills as badges.
 */
export function SkillBlock({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h4 className="mb-1.5 font-bold text-blue-400 text-xs uppercase tracking-wide">
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 font-semibold text-[11px] text-slate-300"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
