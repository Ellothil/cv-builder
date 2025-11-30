export type ResumeData = {
  personal: {
    name: string;
    title: string;
    email?: string;
    phone?: string;
    address?: string;
    github?: string;
    birth?: string;
    nationality?: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    period: string;
  }>;
  projects?: Array<{
    title: string;
    period?: string;
    description: string;
    tech?: string[];
  }>;
  volunteering?: Array<{
    role: string;
    organization: string;
    period?: string;
    description: string;
  }>;
  skills?: {
    programming_languages?: string[];
    frontend?: string[];
    backend?: string[];
    os?: string[];
    cloud?: string[];
  };
  languages?: Array<{ name: string; level: string }>;
};
