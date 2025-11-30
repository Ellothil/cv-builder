import { resumeData } from "@/data/data";

/**
 * Header component displays the user's name and title.
 * It pulls data from the `resumeData` object.
 */
export function Header() {
  return (
    <header className="flex h-[calc(210mm*0.32)] flex-col justify-center border-b-2 px-8">
      <h1 className="mb-1 font-extrabold text-4xl text-white uppercase tracking-tight">
        {resumeData.personal.name}
      </h1>
      <p className="font-medium text-blue-400 text-lg leading-tight">
        {resumeData.personal.title}
      </p>
    </header>
  );
}
