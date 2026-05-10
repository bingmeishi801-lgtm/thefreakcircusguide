"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection({ initialData }: { initialData?: FAQItem[] }) {
  const [faq, setFaq] = useState<FAQItem[]>(initialData || []);
  const [loading, setLoading] = useState(!initialData);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    if (initialData) return;
    fetch("/api/faq")
      .then((r) => r.json() as Promise<{ data: FAQItem[] }>)
      .then((d) => setFaq(d.data || []))
      .catch(() => setFaq([]))
      .finally(() => setLoading(false));
  }, [initialData]);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-display text-2xl sm:text-[28px] text-[#E8ECF0] mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border border-[#1E1E2A] rounded-lg bg-[#12121A] p-6 animate-pulse">
                  <div className="h-4 w-3/4 bg-[#1E1E2A] rounded mb-2" />
                  <div className="h-3 w-1/2 bg-[#1E1E2A] rounded" />
                </div>
              ))
            : faq.map((item, i) => (
                <div key={item.id} className="border border-[#1E1E2A] rounded-lg bg-[#12121A] overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-body text-sm font-medium text-[#E8ECF0]">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-icon text-[#8A8F98] flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`}
                      style={{ transition: "transform 0.3s" }}
                    />
                  </button>
                  <div
                    className="px-6 overflow-hidden transition-all duration-300"
                    style={{ maxHeight: open === i ? "200px" : "0", paddingBottom: open === i ? "16px" : "0" }}
                  >
                    <p className="font-body text-sm text-[#8A8F98]">{item.answer}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
