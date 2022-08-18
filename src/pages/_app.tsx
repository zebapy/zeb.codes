import cx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import "../styles/index.css";

const pages = [
  // {
  //   href: "/",
  //   text: "Hello",
  // },
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

  // FIXME: move somewhere else, under about?
  {
    href: "/uses",
    text: "Uses",
  },

  // {
  //   href: "/blog",
  //   text: "Blog",
  // },
];

const Bubble = () => (
  <span
    className="w-2 h-2 border-2 border-purple-400 block rounded-full absolute top-0  "
    style={{
      right: "-.5rem",
    }}
    aria-hidden="true"
  />
);

function Nav() {
  const { pathname } = useRouter();
  return (
    <nav className="">
      <ul className="flex gap-4">
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
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <header className="container py-8 lg:flex justify-between">
        <a href="/" className="font-semibold text-md p-4">
          Zeb Pykosz
        </a>
        <Nav />
      </header>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
