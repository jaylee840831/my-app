'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

export function Typewriter({ text }: { text: string }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <h3 className="text-3xl md:text-4xl font-bold">{display}</h3>;
}

export default function HomeHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="relative w-full flex items-center justify-center h-[400px]">
        {/* 背景 */}
        <div className="absolute inset-0">
          <Image
            src="/PlayBasketball.jpg"
            alt="Hero"
            fill
            loading="eager"
            className="object-cover object-[center_48%] brightness-75"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 items-center text-white">
          <Typewriter text="You only live once. Make it count."></Typewriter>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mt-20 mb-28 mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* 左：文字 */}
        <div
          className={`
            transition-all duration-1000 order-2 md:order-1
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h1 className="mt-4 leading-tight">JASPER LI</h1>

          <h5 className="tracking-[0.3em]">FULL-STACK DEVELOPER</h5>

          <div className="mt-8">
            <p className="mt-2">{profile.introduce}</p>
          </div>

          {/* 🎓 學歷 */}
          <div className="mt-6">
            <h5 className="text-blue-500 font-semibold">學歷</h5>

            <div className="ml-4">
              {profile.education.map((edu, index) => (
                <p key={index} className="mt-2">
                  {edu.school} {edu.department}
                </p>
              ))}
            </div>
          </div>

          {/* 💼 經歷 */}
          <div className="mt-6">
            <h5 className="text-blue-500 font-semibold">經歷</h5>

            <div className="ml-4">
              <ul className="mt-2 space-y-1">
                {profile.experience.slice(0, 3).map((exp, index) => (
                  <li key={index}>
                    {exp.title} {exp.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 relative inline-block cursor-pointer group text-blue-500 font-semibold w-full text-end">
            <Link href="/about">MORE ABOUT ME</Link>
            <span className="ml-2 inline-flex gap-1 text-lg">
              <span className="arrow">❯</span>
              <span className="arrow">❯</span>
              <span className="arrow">❯</span>
            </span>
          </div>
        </div>

        {/* 右：圖片 */}
        <div
          className={`
            flex justify-center transition-all duration-1000 order-1 md:order-2 min-w-0
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
          `}
        >
          <Swiper loop modules={[Autoplay]} autoplay={{ delay: 5000 }} className="w-full">
            {profile.swiperImage.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="relative w-full aspect-square">
                  <Image
                    src={src}
                    alt={`Personal ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    className="object-cover rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
