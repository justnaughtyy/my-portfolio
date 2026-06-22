import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Mail,
    Phone,
    MapPin,
    Globe,
    ArrowUpRight,
    MessageSquareDiff
} from 'lucide-react';

const Contact = () => {
    const socials = [
        {
            name: 'GitHub',
            url: 'https://github.com/justnaughtyy',
            icon: 'https://thesvg.org/icons/github/dark.svg',
            color: 'hover:border-white hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]',
            textColor: 'group-hover:text-white'
        },
        {
            name: 'Facebook',
            url: 'https://web.facebook.com/profile.php?id=61556640510585',
            icon: 'https://thesvg.org/icons/facebook/default.svg',
            color: 'hover:border-blue-500 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.4)]',
            textColor: 'group-hover:text-blue-500'
        },
        {
            name: 'Website',
            url: 'https://yourwebsite.com',
            icon : 'https://thesvg.org/icons/vercel/default.svg',
            color: 'hover:border-yellow-500 hover:shadow-[0_10px_30px_-10px_rgba(253,199,0,0.4)]',
            textColor: 'group-hover:text-yellow-400'
        }
    ];

    return (
        <main data-aos="fade-up" id='contact' className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

            
            <div className="flex items-center justify-center lg:justify-start mb-12">
                <MessageSquareDiff size={56} color="#FDC700" className="hidden md:block" />
                <MessageSquareDiff size={40} color="#FDC700" className="md:hidden" />
                <h1 className="ml-4 text-white text-4xl md:text-5xl lg:text-[64px] font-bold">
                    Get in Touch
                </h1>
            </div>

            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">

                
                <div className="w-full lg:w-1/2 flex flex-col justify-center bg-white/5 backdrop-blur-sm border border-gray-600 rounded-3xl p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
                        Let's work together!
                    </h2>
                    <p className="text-gray-300 mb-10 leading-relaxed">
                        I'm currently looking for internship opportunities. If you have a position available or just want to say hi, feel free to reach out to me!
                    </p>

                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-center group">
                            <div className="p-4 bg-white/10 rounded-xl mr-4 transition-colors group-hover:bg-yellow-500/20 group-hover:text-yellow-400 text-white">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a href="mailto:natkamon.nongluang@gmail.com" className="text-white text-lg font-medium hover:text-yellow-400 transition-colors">
                                    natkamon.nongluang@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center group">
                            <div className="p-4 bg-white/10 rounded-xl mr-4 transition-colors group-hover:bg-yellow-500/20 group-hover:text-yellow-400 text-white">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <a href="tel:+66947585255" className="text-white text-lg font-medium hover:text-yellow-400 transition-colors">
                                    +66 94 758 5255
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center group">
                            <div className="p-4 bg-white/10 rounded-xl mr-4 transition-colors group-hover:bg-yellow-500/20 group-hover:text-yellow-400 text-white">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-white text-lg font-medium">
                                    Phitsanulok, Thailand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${social.color}`}
                        >
                            <div className={`text-gray-300 mb-4 transition-colors duration-300 ${social.textColor}`}>
                                <Image
                                    src={social.icon}
                                    alt="Social Icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h3 className={`text-xl font-bold text-gray-300 transition-colors duration-300 ${social.textColor}`}>
                                {social.name}
                            </h3>
                            <div className="mt-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-gray-400">
                                <ArrowUpRight size={20} />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Contact;