import Head from "next/head";

interface PageHeaderProps {
  title: string;
  intro?: string;
}

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className="py-12">
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="h1">{title}</h1>

      <div className="mb-8">
        <p className="text-xl text-gray-400">{intro}</p>
      </div>
    </header>
  );
}
