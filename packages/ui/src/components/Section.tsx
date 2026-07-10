import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  label?: string;
  title: string;
  children: ReactNode;
}

export const Section = ({ id, label, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {label && (
          <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-600">
            {label}
          </div>
        )}
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
