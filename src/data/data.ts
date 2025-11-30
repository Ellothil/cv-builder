import type { ResumeData } from "../types/resume-type";

// Put your resume data here
export const resumeData: ResumeData = {
  personal: {
    name: "Max Mustermann",
    title: "Cloud Engineer",
    email: "max@mustermann.com",
    phone: "123456789",
    address: "Musterstraße 123",
    github: "https://github.com/maxmustermann",
    birth: "1990-01-01",
    nationality: "Deutsch",
  },
  education: [
    {
      degree: "M.Sc. Software Engineering",
      institution: "Muster-Universität Musterstadt",
      period: "10/2018 - 10/2020",
    },
    {
      degree: "B.Sc. Informatik",
      institution: "Muster-Universität Musterstadt",
      period: "10/2015 - 10/2018",
    },
  ],
  projects: [
    {
      title: "Muster-Projekt",
      period: "10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante finibus finibus.",
      tech: ["React", "Node.js", "Docker"],
    },
    {
      title: "Muster-Projekt",
      period: "10/2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante finibus finibus.",
      tech: ["Flutter", "Dart"],
    },
  ],
  volunteering: [
    {
      role: "Mentor",
      organization: "Muster-Organisation",
      period: "2019 - Heute",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante finibus finibus.",
    },
  ],
  skills: {
    programming_languages: ["TypeScript", "JavaScript", "Python", "Go"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "PostgreSQL"],
    os: ["Linux (Ubuntu)", "Windows"],
    cloud: ["AWS", "Docker", "Kubernetes"],
  },
  languages: [
    { name: "Deutsch", level: "Muttersprache" },
    { name: "Englisch", level: "C1" },
  ],
};
