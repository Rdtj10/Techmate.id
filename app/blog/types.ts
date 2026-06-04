export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "software" | "hardware" | "konsultasi";
  readTime: string;
  date: string;
  author: string;
  coverGradient: string;
  coverIcon: string;
  content: string;
}
