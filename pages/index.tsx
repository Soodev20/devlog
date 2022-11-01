import Introduce from '../src/components/Introduce'
import Menu from '../src/components/Navigation'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-10">
      <Menu />
      <Introduce />
    </div>
  )
}
