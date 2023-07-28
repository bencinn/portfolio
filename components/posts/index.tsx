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
      {posts.map((post) => {
        console.log(post);
        return (
          <Link
            key={post._id}
            href={post.slug.current}
            className="p-4 hover:bg-blue-50 w-[300px] h-[450px]"
            style={{ backgroundImage: "url(" + builder.image(post.mainImage).width(300).height(450).blur(85).url() + ")" }}
          >
            <div>
              {post?.mainImage ? (
                <Image
                  className="float-left m-0 w-1/3 mr-4 rounded-lg w-auto"
                  src={builder.image(post.mainImage).width(300).height(300).url()}
                  width={300}
                  height={300}
                  alt={post?.mainImage?.alt}
                />
              ) : "test"}
              <h2>{post.title}</h2>
            </div>
          </Link>
        )
      })}
    </main>
  );
}
