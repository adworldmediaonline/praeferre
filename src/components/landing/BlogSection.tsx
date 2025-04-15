import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  title: string;
  date: string;
  image: string;
  slug: string;
}

const BlogPost = ({ title, date, image, slug }: BlogPostProps) => {
  return (
    <div className="relative rounded-2xl group transition-all duration-300 hover:-translate-y-1 p-[1px] overflow-hidden">
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C875]/70 to-[#00E5C2]/70 rounded-2xl z-0"></div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col overflow-hidden rounded-2xl bg-[#0a1028]/95 h-full">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-3 p-6">
          <span className="text-sm font-medium text-gray-400">{date}</span>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <Link
            href={`/blog/${slug}`}
            className="mt-2 group flex items-center gap-2 text-sm font-semibold text-[#00C875]"
          >
            <span className="relative">
              Read More
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#00C875] to-[#00E5C2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function BlogSection() {
  const blogPosts = [
    {
      title:
        'A Guide on The Data Protection and Digital Information Bill in the United Kingdom',
      date: 'December 26, 2024',
      image: '/blog/blog1.jpeg',
      slug: 'data-protection-and-digital-information-bill',
    },
    {
      title:
        "Understanding Enterprise Data Security: Safeguarding Your Organisation's Most Valuable Asset",
      date: 'December 26, 2024',
      image: '/blog/blog2.jpeg',
      slug: 'understanding-enterprise-data-security',
    },
    {
      title: 'The Importance of Regular Security Audits',
      date: 'December 26, 2024',
      image: '/blog/blog3.webp',
      slug: 'importance-of-regular-security-audits',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#050A1C] relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-block rounded-full bg-[#00C875]/20 px-6 py-2 text-base font-medium text-[#00C875] mb-4">
            News & Blog
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
            Affordable Cyber Security Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
