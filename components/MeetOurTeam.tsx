import { teamData } from "../mockData/team";
import Image from "next/image";

const MeetOurTeam = () => {
    return (
        <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Meet Our Team</h2>
             <div className="grid grid-cols-2 gap-8">
                {teamData.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-teal-500 ring-offset-2">
                            <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" />
                             {/* You'll need a placeholder avatar image in `public` folder */}
                        </div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default MeetOurTeam; 