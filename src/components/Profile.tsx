'use client';

import Image from 'next/image';
import { profile } from '@/data/profile';

export default function Profile() {
  return (
    <div>
      <div className="relative z-10 w-full max-w-6xl mt-20 mb-28 mx-auto px-6 items-center text-center">
        <div className="relative w-72 aspect-square mx-auto">
            <Image
            src='/Personal.jpg'
            alt='Personal1'
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            loading="eager"
            className="object-cover rounded-2xl"
            />
        </div>

        <div className='mt-6'>
            <a href="/李尹覺_resume.pdf" download>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    下載履歷
                </button>
            </a>
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
                {profile.experience.map((exp, index) => (
                    <li key={index}>
                    {exp.title} {exp.desc}
                    </li>
                ))}
                </ul>
            </div>
        </div>

        {/* 專長 */}
        <div className="mt-6">
            <h5 className="text-blue-500 font-semibold">專長</h5>

            <div className="ml-4">
                <ul className="mt-2 space-y-1">
                {profile.skill.map((exp, index) => (
                    <li key={index}>
                    {exp.title} {exp.desc}
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}