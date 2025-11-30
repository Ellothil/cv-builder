import { LuCode } from "react-icons/lu";

/**
 * Footer component displays the signature, date, and a link to the source code.
 * It is intended to be placed at the bottom of the resume.
 */
export function Footer() {
  return (
    <div className="relative mt-auto flex w-full items-end justify-between pt-8">
      <div className="flex flex-col">
        {/** biome-ignore lint/correctness/useImageSize: <> */}
        <img alt="Unterschrift" className="h-16" src="/unterschrift.png" />

        <div className="h-px w-64 bg-slate-300" />
        <div className="text-md text-slate-500">
          Ortsname, den {new Date().toLocaleDateString("de-DE")}
        </div>
      </div>

      <a
        className="flex items-center gap-1 text-slate-500 no-underline transition-colors hover:text-blue-500 hover:underline"
        href={"https://github.com/Ellothil/cv-builder"}
        rel="noreferrer"
        target="_blank"
        title="Zum Source Code dieses Lebenslaufs"
      >
        <LuCode size={14} /> Built with React (Source)
      </a>
    </div>
  );
}
