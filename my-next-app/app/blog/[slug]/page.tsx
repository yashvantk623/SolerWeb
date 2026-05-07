"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import blogsData from "../blogs.json";

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="mx-auto max-w-4xl px-6 sm:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
          >
            Back to Blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="mb-3 inline-block">
            <span className="bg-emerald-700 px-4 py-1 rounded-full text-sm font-semibold">
              {blog.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{blog.title}</h1>
          <div className="flex flex-wrap gap-4 text-emerald-100 text-sm">
            <span>📅 {blog.date}</span>
            <span>⏱️ {blog.readTime}</span>
            <span>✍️ {blog.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="mb-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100">
            <div className="text-center">
              <div className="text-6xl mb-4">☀️</div>
              <p className="text-emerald-700 font-semibold">{blog.category}</p>
              <p className="text-gray-600 text-sm mt-2">(Image coming soon)</p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {blog.content.split("\n").map((paragraph, idx) => {
              // Insert inline images at specific points
              if (paragraph.includes("[IMAGE:")) {
                const imageMatch = paragraph.match(/\[IMAGE:(\d+)\]/);
                if (imageMatch && blog.inlineImages) {
                  const imageIndex = parseInt(imageMatch[1]);
                  const image = blog.inlineImages[imageIndex];
                  if (image) {
                    return (
                      <figure key={idx} className="my-8 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.name}
                          className="w-full rounded-lg shadow-md"
                          onError={(e) => {
                            e.currentTarget.classList.add('hidden');
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden bg-gradient-to-br from-emerald-100 to-teal-100 p-12 rounded-lg flex items-center justify-center min-h-64">
                          <div className="text-center">
                            <div className="text-5xl mb-3">📊</div>
                            <p className="text-emerald-700 font-semibold">{image.name}</p>
                            <p className="text-gray-600 text-sm mt-2">(Image placeholder)</p>
                          </div>
                        </div>
                        <figcaption className="text-sm text-gray-600 text-center mt-3 italic p-4 bg-gray-50">
                          {image.caption}
                        </figcaption>
                      </figure>
                    );
                  }
                }
                return null;
              }

              // Handle Markdown-style headings
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace("# ", "")}
                  </h1>
                );
              }

              // Handle unordered lists
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={idx} className="ml-6 text-gray-700">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }

              // Handle table markers
              if (paragraph.includes("|")) {
                return (
                  <p key={idx} className="text-gray-600 text-sm my-2 font-mono">
                    {paragraph}
                  </p>
                );
              }

              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </article>

        {/* Author & Share Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
            <p className="text-gray-700">{blog.author} at Volta Solar</p>
            <p className="text-gray-600 text-sm mt-2">
              Our expert team shares in-depth knowledge about solar energy, installation, maintenance, and financial planning to help you make informed decisions.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-emerald-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Implement These Solutions?</h3>
            <p className="text-emerald-100 mb-6">
              Contact Volta Solar today for a free consultation tailored to your home's specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Site Audit
            </a>
            <p className="text-emerald-100 text-sm mt-4">📞 Or call us: +91 9311757497</p>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {blogsData
              .filter((b) => b.category === blog.category && b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
                    <div className="h-32 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                      <span className="text-3xl opacity-30">☀️</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition line-clamp-2">
                        {relatedBlog.cardTitle}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* If no related posts in same category */}
          {blogsData.filter((b) => b.category === blog.category && b.id !== blog.id).length === 0 && (
            <div className="grid gap-6 md:grid-cols-3">
              {blogsData
                .filter((b) => b.id !== blog.id)
                .slice(0, 3)
                .map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
                      <div className="h-32 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                        <span className="text-3xl opacity-30">☀️</span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition line-clamp-2">
                          {relatedBlog.cardTitle}
                        </h4>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 text-emerald-600 font-semibold hover:text-emerald-700 transition"
          >
            ← Back to All Articles
          </Link>
        </div>
      </section>
    </main>
  );
}
