import Image from 'next/image';
import HomeHero from '@/components/HomeHero';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

export const metadata = {
  title: '李尹覺(Jasper LI) | 軟體工程師 | Software Engineer | FULL-STACK DEVELOPER',
  description: '專業網站開發、系統建置',
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 背景光影 */}
      <div className="absolute inset-0" />

      {/* HERO */}
      <section>
        <HomeHero />
      </section>

      {/* SKILLS */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 items-center">
        <Reveal>
          <h2 className="mb-8 tracking-widest">SERVICES</h2>

          <div className="relative z-10 pb-24">
            <div className="grid md:grid-cols-3 gap-8">
              {profile.expertise.map((content, index) => (
                <div key={index} className="hover:scale-[1.02] transition">
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={content.imageUrl}
                      alt={content.title}
                      fill
                      sizes="400px"
                      loading="eager"
                      className="object-cover rounded-2xl border"
                    />
                  </div>
                  <h5 className="mt-3 text-blue-500">{content.title}</h5>
                  <p className="mt-3">{content.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER CTA */}
      <section className="relative z-10 text-center pb-24 px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto p-10">
            <h2>有專案想合作嗎？</h2>

            <p className="mt-3">無論是網站開發、系統設計或接案合作，歡迎找我聊聊。</p>

            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold"
            >
              與我聯絡
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
