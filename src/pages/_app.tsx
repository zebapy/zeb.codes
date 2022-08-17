import "tailwindcss/tailwind.css";
import "../styles/index.css";
import Link from "next/link";
import cx from "clsx";
import { useRouter } from "next/router";

const pages = [
  {
    href: "/",
    text: "Hello",
  },
  {
    href: "/work",
    text: "Work",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  // {
  //   href: "/blog",
  //   text: "Blog",
  // },
];

const Bubble = () => (
  <span
    className="w-2 h-2 border-2 border-purple-400 block rounded-full absolute top-0 "
    style={{
      left: "calc(100% + .5rem)",
    }}
    aria-hidden="true"
  />
);

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <div>
      <div className="mb-32 p-8">
        <a href="/" className="font-semibold text-md p-4">
          Zeb Pykosz
        </a>
      </div>
      <div className="grid grid-cols-4">
        <header className="col-span-1">
          <nav className="text-right pr-24 border-r-4 border-gray-800 py-48">
            <ul>
              {pages.map((page) => {
                const active = pathname === page.href;
                return (
                  <li key={page.href} className="mb-4 relative">
                    <Link href={page.href} passHref>
                      <a
                        className={cx("font-semibold text-lg", {
                          "text-purple-400": active,
                        })}
                      >
                        {active && <Bubble />}
                        {page.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <main className="col-span-3 px-16">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}

export default MyApp;
