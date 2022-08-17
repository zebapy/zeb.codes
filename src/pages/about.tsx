import { Section } from "src/components/Section";
import site from "../data/site.json";

function WorkHistory() {
  return (
    <ol className="space-y-10">
      {site.career.map((job) => {
        return (
          <li className="">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="h3 m-0">{job.role}</h3>
                <span className="text-gray-400 font-semibold">
                  {job.start_year}-{job.end_year ? job.end_year : "Present"}
                </span>
              </div>
              <p className="text-lg mb-3">
                <a href={job.url}>{job.company}</a>
              </p>
            </div>

            <div>
              <ul className="list-disc pl-4">
                {job.highlights.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="my-4"></div>
              <ul className="flex gap-2">
                {job.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="text-sm bg-gray-800 text-gray-500 rounded px-2 py-1"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <div>
      <Section title="Skills and principles">{/* <WorkHistory /> */}</Section>

      <Section title="Work history">
        <WorkHistory />
      </Section>
    </div>
  );
}
