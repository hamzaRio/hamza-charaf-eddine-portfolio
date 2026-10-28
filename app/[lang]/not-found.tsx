import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="font-data text-sm text-accent">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-text">Page not found</h1>
      <p className="mt-3 font-body text-base text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/en"
        className="focus-ring mt-8 inline-flex items-center justify-center bg-accent px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-strong"
      >
        Back to home
      </Link>
    </div>
  );
}
