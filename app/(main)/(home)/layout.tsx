import { cookies } from "next/headers"
import HomeInfo from "./HomeInfo"

export default function HomeLayout({ children }) {
  const c = cookies();

  return (
    <>
      <HomeInfo />
      {children}
    </>
  )
}