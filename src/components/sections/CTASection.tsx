export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(to bottom, #0A0A0F, #12121A)" }}>
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-[#E8ECF0] mb-5">
          Explore Every Character.<br />Discover Every Route.
        </h2>
        <p className="font-body text-base text-[#8A8F98] mb-8">
          Character profiles, route hints, and ending details — all in one place. Updated as new game content drops.
        </p>
        <a href="#characters" className="cta-red inline-block">Browse Character Guides &mdash; Free</a>
      </div>
    </section>
  );
}
