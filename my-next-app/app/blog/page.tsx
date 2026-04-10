"use client";

import Link from "next/link";
import blogsData from "./blogs.json";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Solar Energy <span className="text-emerald-600">Insights & Tips</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights about solar energy solutions. Learn how to maximize your solar investment and contribute to a sustainable future.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogsData.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md transition hover:shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden relative">
                {post.featuredImage ? (
                  <>
                    <img
                      src={post.featuredImage}
                      alt={post.cardTitle}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-emerald-600 opacity-20 mb-2">
                          ☀️
                        </div>
                        <p className="text-sm text-emerald-700/60">{post.category}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 opacity-20 mb-2">
                      ☀️
                    </div>
                    <p className="text-sm text-emerald-700/60">{post.category}</p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-3 inline-block">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {post.category}
                  </span>
                </div>

                <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition">
                  {post.cardTitle}
                </h2>

                <p className="mb-4 text-gray-600 text-sm">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-emerald-100 mb-8">
            Contact Volta Solar today for a free consultation and custom solar solution for your home or business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}
