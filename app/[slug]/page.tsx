import { SanityDocument } from "@sanity/client";
import Post from "@/components/post";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await client.fetch.bind(client)(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await client.fetch.bind(client)<SanityDocument>(postQuery, params);
  return <Post post={post} />;
}
