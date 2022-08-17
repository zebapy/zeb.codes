import { allProjects } from "contentlayer/generated";
import { PageHeader } from "src/components/PageHeader";
import { FolioList } from "..";

export default function Projects() {
  return (
    <div>
      <PageHeader
        title="Projects"
        intro="Sometimes I build a few hobby app ideas"
      />
      <FolioList items={allProjects} />
    </div>
  );
}
