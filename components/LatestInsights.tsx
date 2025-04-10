import { insightsData } from "../mockData/insights";
import Image from "next/image";
import Link from "next/link";

const LatestInsights = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-black">
                <h2 className="text-3xl font-bold text-center mb-4">Latest Insights</h2>
                <p className="text-center text-gray-600 mb-12">Stay updated with our latest thoughts</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {insightsData.map((insight, index) => (
                        <div key={index} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image src={insight.imageUrl} alt={insight.title} layout="fill" objectFit="cover" />
                                {/* You'll need placeholder images like placeholder-insight-*.jpg */}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start ${getTagColor(insight.tag)}`}>{insight.tag}</span>
                                <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{insight.description}</p>
                                <Link href={insight.link} className="text-teal-600 hover:text-teal-700 font-medium flex items-center mt-auto">
                                    Read More <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


// Helper function for tag colors (customize as needed)
const getTagColor = (tag: string): string => {
    switch (tag.toLowerCase()) {
        case "mobile development":
            return "bg-blue-100 text-blue-700";
        case "case study":
            return "bg-green-100 text-green-700";
        case "design":
            return "bg-purple-100 text-purple-700";
        default:
            return "bg-gray-100 text-gray-700";
    }
}


export default LatestInsights; 