// mockData/projects.ts
export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    tag?: string;
}

export const projectsData: Project[] = [
    {
        title: "MediBook",
        description: "Medical appointment booking app built with React Native and Expo",
        imageUrl: "/images/doctor.png", // Using the specified placeholder
        link: "/portfolio/medibook",
        tag: "Featured"
    },
    {
        title: "E-Commerce Platform",
        description: "Modern shopping experience with Next.js",
        imageUrl: "/images/e-commerce.png", // Add another placeholder
        link: "/portfolio/ecommerce",
    },
    {
        title: "Fitness Tracker",
        description: "Mobile app for tracking workouts",
        imageUrl: "/images/fitness.png", // Add another placeholder
        link: "/portfolio/fitness-tracker",
    }
] 