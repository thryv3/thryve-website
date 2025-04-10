import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           {/* Placeholder for Logo */}
           <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Image src="/images/thryve-logo.png" alt="Thryve Logo" width={32} height={32} />
           </div>
           <span className="text-xl font-bold text-gray-800">Thryve</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-gray-600 hover:text-teal-600">Services</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-teal-600">Portfolio</Link>
          <Link href="/about" className="text-gray-600 hover:text-teal-600">About Us</Link>
          <Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-teal-600">Contact</Link>
        </div>
        <button className="hidden md:block bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">
          Get In Touch
        </button>
        {/* Mobile Menu Button Placeholder */}
        <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 