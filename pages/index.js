import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <div className="container flex items-center flex-col px-4 mx-auto mt-10 space-y-12">
      {posts.map((post, index) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {post.frontMatter.title}
                <div className="text-grey-700 text-base">
                  {post.frontMatter.description}
                  <div className="text-xs italic">
                    {post.frontMatter.date}
                    <div className="px-6 py-4">
                      <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{post.frontMatter.tags}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mx-auto">
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
