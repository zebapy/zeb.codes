import { ReactNode } from "react";

export function Section({
  title,
  intro,
  children,
  footer,
}: {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section className="mb-12 rounded-xl border border-gray-800 p-8">
      <header className="flex justify-between mb-8">
        <div>
          <h3 className="text-4xl font-bold text-purple-100">{title}</h3>
          <p className="text-xl text-gray-400">{intro}</p>
        </div>
      </header>

      {children}
      {footer && <div className="pt-10">{footer}</div>}
    </section>
  );
}
