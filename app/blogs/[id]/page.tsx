"use client"

// // app/blogs/[id]/page.tsx

// import Image from "next/image";
// import { notFound } from "next/navigation";

// type BlogPageProps = {
//   params: {
//     id: string;
//   };
// };

// async function fetchBlog(id: string) {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}?populate=*`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     const json = await res.json();
//     return json.data;
//   } catch (err) {
//     console.error("Error fetching blog:", err);
//     return null;
//   }
// }

// export default async function BlogPage({ params }: BlogPageProps) {
//   const blog = await fetchBlog(params.id);

//   if (!blog) return notFound();

//   const { title, content, category, date, author, image, avatar } = blog.attributes;

//   const imageUrl = image?.data?.attributes?.url
//     ? `${process.env.NEXT_PUBLIC_API_URL}${image.data.attributes.url}`
//     : null;

//   const avatarUrl = avatar?.data?.attributes?.url
//     ? `${process.env.NEXT_PUBLIC_API_URL}${avatar.data.attributes.url}`
//     : null;

//   return (
//     <div className="container mx-auto xl:max-w-[1180px] text-white p-6">
//       <h1 className="text-4xl font-bold mb-4">{title}</h1>

//       {imageUrl && (
//         <div className="w-full h-[400px] overflow-hidden mb-6">
//           <img src={imageUrl} alt="Blog Cover" className="w-full h-full object-cover rounded-md" />
//         </div>
//       )}

//       <div className="flex items-center gap-4 mb-6 text-[#97989F]">
//         {avatarUrl && (
//           <img src={avatarUrl} className="w-10 h-10 rounded-full object-cover" alt="Author" />
//         )}
//         <div>
//           <p className="text-sm">{author || "Unknown Author"}</p>
//           <p className="text-xs">{date || "Unknown Date"}</p>
//         </div>
//         <span className="ml-auto bg-[#4B6BFB]/[10%] text-[#4B6BFB] px-2 py-1 text-sm rounded">
//           {category || "Uncategorized"}
//         </span>
//       </div>

//       <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }


import BlogCard from "@/components/BlogCard";

export default function BlogsPage({ blogs }: { blogs: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

// Server-side fetch or useSWR for client-side
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:1337/api/blogs?populate=*');
//   const json = await res.json();

//   return {
//     props: {
//       blogs: json.data.map(entry => entry), // or transform if needed
//     },
//   };
// }
