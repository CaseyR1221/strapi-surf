'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();

  const navItems = [
    {
      display: "The Camp",
      slug: "/"
    },
    {
      display: "The Experience",
      slug: "/experience"
    },
    {
      display: "The Blog",
      slug: "/blog"
    }
  ]

  return (
    <header className={`header ${pathname === '/experience' ? 'header--light' : ''}`}>
      <img className="header__logo" src="/assets/logo.svg" alt="logo" />

      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <h5>{item.display}</h5>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  )
}

export default Header
