import { PageHeader } from "src/components/PageHeader";
import uses from "../data/uses.json";

// based on https://kentcdodds.com/uses
// and https://wesbos.com/uses
// TODO: upload a pic of keyboard?
export default function UsesPage() {
  return (
    <div>
      <PageHeader title="Uses" intro="The gizmos and gadgets I prefer to use" />

      {Object.entries(uses).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="h3 capitalize">{category}</h2>
          <ul className="list-disc pl-4 space-y-1">
            {items.map((item) => (
              <li key={item.name}>
                {item.url ? (
                  <a
                    href={item.url}
                    className="text-lg border-b hover:border-b-0"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
                <span className="text-gray-400 ml-2">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="intro">inspired by kentcdodds and wesbos "uses" pages.</p>
    </div>
  );
}
