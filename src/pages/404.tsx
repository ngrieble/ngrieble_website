// pages/404.tsx
import Link from "next/link";
import type { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="max-w-xl text-center">
        <div className="mb-6 text-6xl">🚧</div>
        <h1 className="text-3xl font-bold">404 — Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          This site is currently under construction. The page you’re looking for may not exist yet.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;