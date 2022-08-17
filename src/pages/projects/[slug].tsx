import { allProjects, Project } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { PageHeader } from "src/components/PageHeader";

export async function getStaticPaths() {
  const paths: string[] = allProjects.map((p) => p.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project: Project = allProjects.find(
    (p) => p._raw.flattenedPath === "projects/" + params.slug
  );

  return {
    props: {
      project,
    },
  };
}

export default function ProjectLayout({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <PageHeader title={project.title} />
      <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
    </article>
  );
}
