import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

export default async function Posts({ queries = "" }: { queries: string }) {
  const posts = await client.fetch.bind(client)<SanityDocument>(queries);
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts.map((post: any) => {
        return (

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={post.slug.current}>
            {post?.mainImage ? (
              <Image
                className="rounded-t-lg"
                src={builder.image(post.mainImage).width(400).height(300).url()}
                width={400}
                height={300}
                alt={post?.mainImage?.alt}
              />
            ) : ""}
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post?.description}
              </p>
              <Link
                key={post._id}
                href={post.slug.current}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#E2E3FA] rounded-lg hover:bg-[#979ECE] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#979ECE] dark:hover:bg-[#E2E3FA] dark:focus:ring-blue-800"
              >
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        )
      })}
    </main >
  );
}
