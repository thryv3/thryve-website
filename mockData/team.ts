// mockData/team.ts
export interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
}

export const teamData: TeamMember[] = [
    { name: "Gnash Oppa Chi", role: "Developer", imageUrl: "/images/gnash-profile.jpg" },
    { name: "Vincent Papi Cholo", role: "Machu Dancer", imageUrl: "/images/vincent-profile.png" },
    { name: "Mike Chen", role: "Mobile Developer", imageUrl: "/images/john.png" },
    { name: "Emma Davis", role: "Project Manager", imageUrl: "/images/john.png" },
] 