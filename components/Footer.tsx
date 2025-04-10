import Link from "next/link";
import Image from "next/image";
import { X, Linkedin, Github, Instagram } from 'lucide-react'; // Example social icons

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            {/* Placeholder for Logo */}
                           <div className="w-8 h-8 bg-white rounded-full">
                            <Image src="/images/thryve-logo.png" alt="Thryve Logo" width={32} height={32} />
                           </div>
                           <span className="text-xl font-bold">Thryve</span>
                        </div>
                        <p className="text-sm opacity-80">
                            Building digital solutions that help businesses grow and thrive.
                        </p>
                    </div>

                     {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/services" className="hover:opacity-100 hover:underline">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:opacity-100 hover:underline">Portfolio</Link></li>
                            <li><Link href="/about" className="hover:opacity-100 hover:underline">About Us</Link></li>
                            <li><Link href="/blog" className="hover:opacity-100 hover:underline">Blog</Link></li>
                        </ul>
                    </div>

                     {/* Services */}
                    <div>
                         <h4 className="font-semibold mb-4">Services</h4>
                         <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/services/mobile-development" className="hover:opacity-100 hover:underline">Mobile Development</Link></li>
                            <li><Link href="/services/web-development" className="hover:opacity-100 hover:underline">Web Development</Link></li>
                            <li><Link href="/services/ui-ux-design" className="hover:opacity-100 hover:underline">UI/UX Design</Link></li>
                            <li><Link href="/services/consulting" className="hover:opacity-100 hover:underline">Consulting</Link></li>
                         </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100"><X size={20} /></a>
                            <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><Linkedin size={20} /></a>
                            <a href="#" aria-label="GitHub" className="opacity-80 hover:opacity-100"><Github size={20} /></a>
                            <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 text-center text-sm opacity-70">
                    &copy; {new Date().getFullYear()} Thryve. All rights reserved.
                </div>
            </div>
        </footer>
    )
}


export default Footer; 