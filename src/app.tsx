import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Languages } from "./components/languages";
import { PrintButton } from "./components/print-button";
import { ProfileImage } from "./components/profile-image";
import {
  SectionContent,
  SectionPeriod,
  SectionTitle,
} from "./components/section";
import { TechSkills } from "./components/tech-skills";
import { resumeData } from "./data/data";

export default function App() {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100 py-10 print:block print:bg-white print:p-0">
      <PrintButton />

      {/* A4 Container - Maße fest für Print optimiert */}
      <div className="relative grid h-[297mm] w-[210mm] grid-cols-[32%_68%] overflow-hidden bg-slate-900 shadow-2xl print:grid print:h-screen print:w-full print:shadow-none">
        {/* Left Column */}
        <aside className="flex flex-col gap-6 bg-slate-900 p-6 text-slate-300">
          <ProfileImage />
          <Contact />
          <TechSkills />
          <Languages />
        </aside>

        <div className="flex h-full flex-col">
          {/* Header */}
          <Header />

          <main className="flex h-auto flex-1 flex-col gap-5 rounded-tl-xl bg-white p-6 text-slate-800">
            {/* Projects/Experience */}
            <section>
              <SectionTitle title="Praktische Erfahrung & Projekte" />
              <SectionContent>
                {resumeData.projects?.map((project) => (
                  <div
                    className="relative border-slate-200 border-l-2 pl-4"
                    key={project.title}
                  >
                    <div className="mb-1 flex items-baseline justify-between">
                      <h3 className="font-bold text-base text-slate-900">
                        {project.title}
                      </h3>

                      <SectionPeriod period={project.period} />
                    </div>
                    <p className="mb-1.5 text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {!!project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0 font-semibold text-[10px] text-blue-700"
                            key={t}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </SectionContent>
            </section>

            {/* Education */}
            <section>
              <SectionTitle title="Ausbildung" />
              <SectionContent>
                {resumeData.education.map((edu) => (
                  <div
                    className="flex items-start justify-between"
                    key={edu.degree}
                  >
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {edu.institution}
                      </p>
                    </div>
                    <SectionPeriod period={edu.period} />
                  </div>
                ))}
              </SectionContent>
            </section>

            {/* Volunteering */}
            {!!resumeData.volunteering && (
              <section>
                <SectionTitle title="Engagement" />
                <SectionContent>
                  {resumeData.volunteering.map((vol) => (
                    <div
                      className="flex items-start justify-between"
                      key={vol.role}
                    >
                      <div>
                        <h3 className="font-bold text-base text-slate-900">
                          {vol.role}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {vol.organization}
                        </p>
                        <p className="mt-0.5 text-slate-500 text-xs italic">
                          {vol.description}
                        </p>
                      </div>
                      <SectionPeriod period={vol.period} />
                    </div>
                  ))}
                </SectionContent>
              </section>
            )}

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
