import { resumeData } from "@/data/data";

/**
 * Languages component displays a list of languages and proficiency levels.
 * It pulls data from the `resumeData` object.
 */
export function Languages() {
  return (
    <div className="mt-auto flex flex-col gap-2 pb-4">
      <h3 className="border-slate-700 border-b pb-2 font-bold text-white uppercase tracking-wider">
        Sprachen
      </h3>
      {resumeData.languages?.map((lang) => (
        <div className="flex justify-between text-sm" key={lang.name}>
          <span className="font-medium text-white">{lang.name}</span>
          <span className="text-slate-400">{lang.level}</span>
        </div>
      ))}
    </div>
  );
}
