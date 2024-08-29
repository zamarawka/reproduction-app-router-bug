'use client';

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const search = useSearchParams();
  const path = usePathname();

  const tab = search?.get('tab') ?? (path === '/' ? 'Home' : null)

  return (
    <header>
      Menu {tab && <div>Current tab: {tab}</div>}
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/?tab=other">Tab "other"</Link></li>
        <li><Link href={{ pathname: '/', query: {
          tab: 'more'
        } }}>Tab "more"</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/someuser">Someuser</Link></li>
      </ul>
    </header>
  )
}