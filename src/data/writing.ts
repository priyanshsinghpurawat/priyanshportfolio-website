export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "bca-self-taught-mern",
    title: "BCA + self-taught MERN: my stack journey",
    excerpt:
      "Why I picked the MERN stack as a BCA student in Jaipur, and what I'd tell anyone starting from scratch today.",
    date: "2025-08-12",
    readingTime: "4 min read",
    body: [
      "I started my BCA at JECRC University expecting to be handed a curriculum that pointed at a job. What I got was the foundation — DSA, OS, networks — and a wide-open question: which stack do I actually want to be good at?",
      "MERN won because the loop was the shortest. JavaScript on the frontend, JavaScript on the backend, a database I could model in five minutes, and a deploy story I could understand without a DevOps degree. From idea to a shipped feature in an afternoon.",
      "If I were starting today, I'd ignore the framework wars for the first six months. Learn vanilla JS deeply, build three CRUD apps without React, then add React only when you feel the pain it solves. Same for state libraries — wait until Context hurts.",
      "The thing nobody tells you: shipping ugly is more valuable than learning pretty. Every project on this site started broken, looked bad for a week, then got polished. The polish is the last 10% — the first 90% is just finishing.",
    ],
  },
  {
    slug: "why-i-switched-to-vite",
    title: "Why I switched from Create React App to Vite",
    excerpt:
      "CRA was the default. Vite was a 10x speedup. Here's what changed and what didn't.",
    date: "2025-09-04",
    readingTime: "3 min read",
    body: [
      "Create React App got me through my first dozen React projects. It also got slower with every dependency I added, until a cold start took longer than a coffee run.",
      "Vite flipped that. Dev server cold start dropped from ~12 seconds to under one. HMR was instant. Production builds were smaller because Rollup tree-shook more aggressively than Webpack's defaults.",
      "What didn't change: the React code itself. Components, hooks, routing — all identical. The migration was almost entirely config: a new index.html entry, swap react-scripts for vite, update a few environment variable prefixes.",
      "Lesson: the build tool isn't the app. When something fundamental gets 10x faster, take the afternoon and switch. The compounding return on faster iteration is enormous.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
