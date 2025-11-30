import { resumeData } from "@/data/data";
import { SkillBlock } from "./skill-block";

/**
 * TechSkills component displays various categories of technical skills.
 * It uses the `SkillBlock` component to render each category.
 */
export function TechSkills() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="border-slate-700 border-b pb-2 font-bold text-white uppercase tracking-wider">
        Tech Stack
      </h3>

      {/* Hier war der Fehler: Titel geändert auf "Programmiersprachen" */}
      <SkillBlock
        skills={resumeData.skills?.programming_languages || []}
        title="Programmiersprachen"
      />
      <SkillBlock
        skills={resumeData.skills?.cloud || []}
        title="Cloud & DevOps"
      />
      <SkillBlock
        skills={resumeData.skills?.os || []}
        title="Betriebssysteme"
      />
      <SkillBlock skills={resumeData.skills?.backend || []} title="Backend" />
      <SkillBlock skills={resumeData.skills?.frontend || []} title="Frontend" />
    </div>
  );
}
