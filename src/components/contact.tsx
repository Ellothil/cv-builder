import { FaGithub } from "react-icons/fa";
import { LuCake, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { resumeData } from "@/data/data";

/**
 * Contact component displays personal contact information including email, phone, address, birth date, and GitHub link.
 * It pulls data from the `resumeData` object.
 */
export function Contact() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <h3 className="mb-1 border-slate-700 border-b pb-2 font-bold text-white uppercase tracking-wider">
        Kontakt
      </h3>

      <a
        className="flex items-center gap-3 transition-colors"
        href={`mailto:${resumeData.personal.email}`}
      >
        <LuMail className="shrink-0" size={14} />
        <span className="break-all">{resumeData.personal.email}</span>
      </a>

      <a
        className="flex items-center gap-3 transition-colors"
        href={`tel:${resumeData.personal.phone}`}
      >
        <LuPhone className="shrink-0" size={14} />
        <span>{resumeData.personal.phone}</span>
      </a>

      <div className="flex items-center gap-3">
        <LuMapPin className="shrink-0" size={14} />
        <div className="flex flex-col">
          <span>{resumeData.personal.address?.split("\n")[0]}</span>
          <span>{resumeData.personal.address?.split("\n")[1]}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <LuCake className="shrink-0" size={14} />
        <span>{resumeData.personal.birth}</span>
      </div>

      {!!resumeData.personal.github && (
        <a
          className="flex items-center gap-3 transition-colors"
          href={resumeData.personal.github}
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub className="shrink-0" size={14} />
          <span>{resumeData.personal.github.replace("https://", "")}</span>
        </a>
      )}
    </div>
  );
}
