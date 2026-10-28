export default function PageHeader({
  heading,
  intro,
}: {
  heading: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <h1 className="font-display text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {heading}
        </h1>
        {intro && <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">{intro}</p>}
      </div>
    </div>
  );
}
