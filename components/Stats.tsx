// components/Stats.tsx
const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
];

const Stats = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</p>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats; 