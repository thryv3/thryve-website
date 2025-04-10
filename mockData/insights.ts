// mockData/insights.ts
export interface Insight {
    tag: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const insightsData: Insight[] = [
    {
        tag: "Mobile Development",
        title: "Why React Native for Startups",
        description: "Explore the benefits of using React Native for your startup's mobile app development.",
        imageUrl: "/images/insight-1.png", // Add placeholder
        link: "/blog/react-native-startups",
    },
    {
        tag: "Case Study",
        title: "How We Built MediBook",
        description: "A deep dive into our development process for the MediBook mobile application.",
        imageUrl: "/images/insight-2.png", // Add placeholder
        link: "/blog/case-study-medibook",
    },
    {
        tag: "Design",
        title: "UI Design Trends 2024",
        description: "Latest trends and best practices in UI design for modern applications.",
        imageUrl: "/images/insight-3.png", // Add placeholder
        link: "/blog/ui-design-trends-2024",
    },
]; 