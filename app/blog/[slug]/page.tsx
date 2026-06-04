import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import BlogDetailClient from "./_client";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artikel Tidak Ditemukan | Techmate" };
  return {
    title: `${post.title} | Blog Techmate`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogDetailClient post={post} />;
}
