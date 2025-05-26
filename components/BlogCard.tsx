// components/BlogCard.tsx
import Image from 'next/image'

export default function BlogCard({ blog }: { blog: any }) {
  const imageUrl = `http://localhost:1337${blog.image.formats.medium?.url || blog.image.url}`;
  const avatarUrl = `http://localhost:1337${blog.avatar.formats.thumbnail?.url || blog.avatar.url}`;

  return (
    <div className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <Image
        src={imageUrl}
        alt={blog.image.name}
        width={750}
        height={500}
        className="rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-sm text-gray-500">{blog.date} · {blog.category}</p>
        <div className="flex items-center gap-2 mt-2">
          <Image
            src={avatarUrl}
            alt={blog.author}
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-sm">{blog.author}</span>
        </div>
        <div
          className="mt-2 text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </div>
  );
}
