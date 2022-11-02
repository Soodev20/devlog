import Link from "next/link"
import { useRouter } from "next/router";
import { MENU_LIST } from "../data/common/menuInfo";

export default function Menu () {
  const router = useRouter()

  const checkNowPath = (path: string): boolean => {
    return router.pathname === path
  }

  return (
    <nav className="px-2 py-2.5">
      <div className="container relative inline-flex flex-row justify-between items-center overflow-hidden mx-auto">
        <div className="flex items-center">
          <a href="/">
            <span className="text-xl font-bold whitespace-nowrap hover:text-main-blue">SoojSooj's Devlog</span>
          </a>
        </div>
        <ul className="flex flex-row relative z-1 transition-duration:3ms">
        {MENU_LIST.map(info => {
          return(
          <Link
            className={`px-4 hover:text-main-blue ${checkNowPath(info.path) && 'border-b-2 border-b-main-orange'}`}
            key={info.title}
            href={info.path}
          >
            <li>{info.title}</li>
          </Link>
          )
        })}
        </ul>
      </div>
    </nav>
  );
}