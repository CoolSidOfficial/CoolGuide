'use client'

import dynamic from "next/dynamic"

export default function MdxClient({ slug }) {
  const Post = dynamic(
    () => import(`./posts/${slug}.mdx`),
    { ssr: false }
  )

  return <Post />
}
