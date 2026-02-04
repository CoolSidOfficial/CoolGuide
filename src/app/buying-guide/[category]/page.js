
import MdxClient from "./MdxClient"

export default async function Page({ params }) {
  const { category } = await params
  return <MdxClient slug={category.toLowerCase()} />
}
