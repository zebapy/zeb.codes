import { ReactNode } from "react";

export function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mb-8">
      <h3 className="h4">{title}</h3>
      <p className="text-intro">{intro}</p>
      {children}
    </section>
  );
}
