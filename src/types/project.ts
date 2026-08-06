export type Decision = {
  title: string;
  why: string;
  tradeoff?: string;
};

export type Challenge = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  stack: string[];
  status?: "In Progress" | "Shipped" | "Live";
  year: string;
  cover: string;
  metric: string;
  problem: string;
  approach: string[];
  outcome: string;
  links: { github?: string; live?: string; server?: string };
  // Case-study extensions
  architecture?: string[];
  decisions?: Decision[];
  challenges?: Challenge[];
  features?: { audience: string; items: string[] }[];
  gallery?: { src: string; alt: string }[];
};
