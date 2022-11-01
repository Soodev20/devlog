import Link from "next/link"

export default function Menu () {
  const MENU_LIST = [
    { title: 'About', path: '/about' },
    { title: 'Posts', path: '/posts' },
    { title: 'Projects', path: 'projects' },
    { title: 'Tags', path: 'tags' }
  ]

  return (
    <nav>
      {MENU_LIST.map(info => {
        return (
          <ul>
            <Link href={info.path}>
              <li key={info.title}>{info.title}</li>
            </Link>
          </ul>
        );
      })}
    </nav>
  )
}