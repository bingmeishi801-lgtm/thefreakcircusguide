import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="text-6xl font-display text-[#00F0FF] mb-4">404</div>
        <h1 className="font-display text-2xl text-[#E8ECF0] mb-3">
          Page Not Found
        </h1>
        <p className="font-body text-[#8A8F98] mb-8">
          This act doesn&apos;t exist. Maybe the Ringmaster moved it?
        </p>
        <a
          href="/"
          className="cta-cyan inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Guide
        </a>
      </div>
    </div>
  );
}
