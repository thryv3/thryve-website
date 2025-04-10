import { projectsData } from "../mockData/projects";
import Image from "next/image";
import Link from "next/link";

const OurWork = () => {
    // Separate featured project for potential different styling
    const featuredProject = projectsData.find(p => p.tag === "Featured");
    const otherProjects = projectsData.filter(p => p.tag !== "Featured");

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-black">Our Work</h2>
                <p className="text-center text-gray-600 mb-12">Featured Projects</p>

                {/* Featured Project */}
                {featuredProject && (
                    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden mb-12 grid md:grid-cols-2 items-center">
                         <div className="relative h-64 md:h-full w-full">
                            <Image src={featuredProject.imageUrl} alt={featuredProject.title} layout="fill" objectFit="cover" />
                         </div>
                         <div className="p-8 md:p-12 text-black">
                            {featuredProject.tag && <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">{featuredProject.tag}</span>}
                            <h3 className="text-2xl font-semibold mb-3">{featuredProject.title}</h3>
                            <p className="text-gray-600 mb-6">{featuredProject.description}</p>
                            <Link 
                                href={featuredProject.link}
                                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300"
                            >
                                View Case Study
                            </Link>
                        </div>
                    </div>
                )}

                 {/* Other Projects - simplified view for this example */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherProjects.map((project, index) => (
                         <div key={index} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                             <div className="relative h-48 w-full">
                                <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" />
                             </div>
                             <div className="p-6 text-black">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                {/* Optional: Add a smaller link/button if needed */}
                                {/* <Link href={project.link}>...</Link> */}
                             </div>
                         </div>
                    ))}
                 </div>
            </div>
        </section>
    )
}

export default OurWork; 