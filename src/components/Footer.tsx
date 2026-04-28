import Link from 'next/link';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t mt-10">
      <div className="flex justify-center gap-6 text-2xl">
        <Link
          href="https://github.com/jaylee840831?tab=repositories"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition"
        >
          <FaGithub />
        </Link>

        <Link
          href="https://www.facebook.com/li.yin.jue/"
          target="_blank"
          aria-label="Facebook"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaFacebook />
        </Link>

        <Link
          href="https://www.instagram.com/jasper0831?igsh=MXA5Nm41MW42MXdvOA=="
          target="_blank"
          aria-label="Instagram"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://www.linkedin.com/in/%E5%B0%B9%E8%A6%BA-%E6%9D%8E-32395b23a/"
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedin />
        </Link>
      </div>

      <p className="text-center text-sm mt-4">
        © {new Date().getFullYear()} Jasper Li. All rights reserved.
      </p>
    </footer>
  );
}
