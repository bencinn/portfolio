"use client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <main className="container mx-auto prose prose-lg p-4">
      <h1 className="text-3xl">{post.title}</h1>
      <div className="flex flex-col">
        {post?.mainImage ? (
          <Image
            className="float-left m-0 mr-4 rounded-lg w-auto"
            src={builder.image(post.mainImage).width(1920).height(300).url()}
            width={1920}
            height={300}
            alt={post?.mainImage?.alt}
          />
        ) : null}
        {post?.mainImage?.alt ? (
          <span className="text-gray-500">({post?.mainImage?.alt})</span>
        ) : null}
      </div>
      {post?.body ? (
        <PortableText
          value={post.body}
          onMissingComponent={(message, options) => {
            console.error(message, {
              type: options.type,
              nodeType: options.nodeType,
            });
          }}
          components={{
            block: {
              h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
              h3: ({ children }) => <h3 className="text-lg">{children}</h3>,
            },
            types: {
              image: ({ value }) => <Image src={value.imageUrl} alt="" />,
              callToAction: ({ value, isInline }) =>
                isInline ? (
                  <a href={value.url}>{value.text}</a>
                ) : (
                  <div className="callToAction">{value.text}</div>
                ),
              code: (props) => (
                <>
                  <SyntaxHighlighter language={props.value.language}>
                    {props.value.code}
                  </SyntaxHighlighter>
                </>
              ),
            },
            marks: {
              link: ({ children, value }) => {
                const rel = !value.href.startsWith("/")
                  ? "noreferrer noopener"
                  : undefined;
                return (
                  <a href={value.href} rel={rel}>
                    {children}
                  </a>
                );
              },
            },
          }}
        />
      ) : null}
    </main>
  );
}
