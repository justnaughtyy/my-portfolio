import React from 'react';
import { Sparkle, ArrowRight, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PersonalProjects = () => {
    return (

        <main data-aos="fade-up" id='myprojects' className="px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">


            <div className="flex items-center mb-10">
                <div className="hidden md:block">
                    <Sparkle size={64} color="#FDC700" />
                </div>
                <div className="md:hidden">
                    <Sparkle size={40} color="#FDC700" />
                </div>
                <h1 className="ml-3 text-white text-4xl md:text-6xl lg:text-[72px] font-bold">
                    Personal Projects
                </h1>
            </div>


            <div className="group flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-6 md:p-8 border border-gray-600 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(253,199,0,0.2)]">


                <div className="flex-1">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 transition-colors group-hover:text-yellow-400">
                        Web Portfolio
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                        A personal portfolio website built to showcase my frontend development skills, and passion for creating responsive, user-friendly web interfaces.
                    </p>


                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/nextdotjs/default.svg"
                                alt="Next.js"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/tailwind-css/default.svg"
                                alt="Tailwind CSS"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-auto">

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 w-full lg:w-auto bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-yellow-400 hover:gap-4"
                    >
                        View Project <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
            {/* 2 */}
            <div className="group flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-6 md:p-8 border border-gray-600 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(253,199,0,0.2)]">


                <div className="flex-1">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 transition-colors group-hover:text-yellow-400">
                        Weather Web App
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                        A responsive weather web application utilizing the Open-Meteo API to fetch and display real-time forecasting data. Designed with a clean, user-friendly interface.
                    </p>


                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/nextdotjs/default.svg"
                                alt="Next.js"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/tailwind-css/default.svg"
                                alt="Tailwind CSS"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-auto">

                    <Link
                        href="https://weatherr-ruddy.vercel.app/"
                        target='_blank'
                        className="flex items-center justify-center gap-2 px-6 py-3 w-full lg:w-auto bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-yellow-400 hover:gap-4"
                    >
                        View Project <ArrowRight size={20} />
                    </Link>
                </div>

            </div>
            {/* 3 */}
            <div className="group flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-6 md:p-8 border border-gray-600 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(253,199,0,0.2)]">


                <div className="flex-1">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 transition-colors group-hover:text-yellow-400">
                        AI CHATBOT SLF (Vibe Coding)
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                        An AI-powered chatbot application utilizing an LLM and RAG (Retrieval-Augmented Generation) architecture to provide accurate answers regarding the Thai Student Loan Fund (กยศ.). Features a responsive and intuitive conversational UI.
                    </p>


                    <div className="flex flex-wrap items-center gap-3">
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/nextdotjs/default.svg"
                                alt="Next.js"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/tailwind-css/default.svg"
                                alt="Tailwind CSS"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/nodedotjs/default.svg"
                                alt="Node.js"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/express/default.svg"
                                alt="Express"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/supabase/default.svg"
                                alt="Supabase"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/gcp-firestore/default.svg"
                                alt="Firestore"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="w-12 h-12 flex justify-center items-center bg-white/10 rounded-xl border border-gray-600/50 hover:scale-110 transition-transform">
                            <Image
                                src="https://thesvg.org/icons/firebase/default.svg"
                                alt="Firebase"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-auto">

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 w-full lg:w-auto bg-red-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-red-400 hover:gap-4"
                    >
                        Under development <Lock size={20} />
                    </Link>
                </div>

            </div>

        </main>
    );
};

export default PersonalProjects;