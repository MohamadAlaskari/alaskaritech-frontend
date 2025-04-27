// src/components/sections/Blog/Blog.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface MediumPost {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
}

interface MediumApiItem {
  title: string;
  link: string;
  content: string;
}

export default function Blog() {
  const blogRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out', duration: 1 } });

    if (blogRef.current) {
      tl.from(blogRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
      });
    }
  }, [posts]);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mohamad-alaskari');
        const data = await response.json();

        const fetchedPosts: MediumPost[] = data.items.slice(0, 3).map((item: MediumApiItem) => {
          const imgMatch = item.content.match(/<img.*?src="(.*?)"/);
          const imageUrl = imgMatch ? imgMatch[1] : '/images/default-thumbnail.jpg';
          const textOnly = item.content.replace(/<[^>]*>?/gm, '');
          const shortDescription = textOnly.substring(0, 100) + '...';

          return {
            title: item.title,
            link: item.link,
            thumbnail: imageUrl,
            description: shortDescription,
          };
        });

        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    }

    fetchMediumPosts();
  }, []);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="max-w-7xl mx-auto py-24 px-8 mt-10"
    >
      <h2 id="blog-heading" className="text-3xl font-bold text-center mb-10">
        Neueste Artikel
      </h2>
      <div ref={blogRef} className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primaryHover text-center"
              >
                Weiterlesen
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
