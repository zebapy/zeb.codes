import { allProjects, Project } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export async function getStaticPaths() {
  const paths: string[] = allProjects.map((p) => p.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project: Project = allProjects.find(
    (p) => p._raw.flattenedPath === params.slug
  );
  return {
    props: {
      project,
    },
  };
}

const PostLayout = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1>{project.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: project.body.html }} />
      </article>
    </>
  );
};

export default PostLayout;
