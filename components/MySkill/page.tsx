import React from 'react';
import Image from 'next/image';

const MySkill = () => {
    const skills = [
        { name: 'HTML', icon: 'https://thesvg.org/icons/html5/default.svg' },
        { name: 'CSS', icon: 'https://thesvg.org/icons/css/default.svg' },
        { name: 'JAVASCRIPT', icon: 'https://thesvg.org/icons/javascript/default.svg' },
        { name: 'TAILWINDCSS', icon: 'https://thesvg.org/icons/tailwind-css/default.svg' },
        { name: 'REACT', icon: 'https://thesvg.org/icons/react/default.svg' },
        { name: 'NEXT', icon: 'https://thesvg.org/icons/nextdotjs/default.svg' },
    ];

    return (
        <main id='myskill' className="py-20">
            <div data-aos="fade-up" className="px-6 md:px-12 lg:px-20 text-center">
                <h1 className="font-bold text-white text-5xl md:text-6xl lg:text-[72px] mb-12">
                    My Skill
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group flex flex-col xl:flex-row justify-center items-center h-28 xl:h-24 border border-gray-600 rounded-xl bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-[0_10px_30px_-10px_rgba(253,199,0,0.5)] hover:border-yellow-500 hover:bg-white/10"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <h1 className="mt-3 xl:mt-0 xl:ml-3 text-white font-medium tracking-wide transition-colors duration-300 group-hover:text-yellow-400">
                                {skill.name}
                            </h1>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    );
};

export default MySkill;