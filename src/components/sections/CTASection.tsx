export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(to bottom, #0A0A0F, #12121A)" }}>
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-[#E8ECF0] mb-5">
          You&apos;ve Already Played.<br />Now See Everything.
        </h2>
        <p className="font-body text-base text-[#8A8F98] mb-8">
          Every route. Every choice. Every ending. Mapped out so you don&apos;t waste hours replaying blind.
        </p>
        <a href="#characters" className="cta-red inline-block">Browse All 50 Endings &mdash; Free</a>
      </div>
    </section>
  );
}
