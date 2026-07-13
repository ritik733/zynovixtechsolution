import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  experience: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Pukhraj Tater",
    role: "CEO",
    department: "Executive",
    image: "/images/team/pukhraj-tater.png",
    bio: "Visionary leader with 4+ years of experience in technology and business strategy. Passionate about building innovative solutions that solve real-world problems.",
    experience: "4+ years in tech leadership",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "john@company.com",
    },
    skills: ["Leadership", "Strategy", "Innovation", "AI/ML"],
  },
  {
    id: 2,
    name: "Piyush Dadhich",
    role: "Lead Developer",
    department: "Engineering",
    image: "/images/team/Piyush-Dadhich.png",
    bio: "Full-stack developer specialized in React, Next.js, and cloud architecture. Dedicated to writing clean, scalable code and mentoring junior developers.",
    experience: "8+ years in software development",
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
    skills: ["React", "Next.js", "TypeScript", "AWS", "Node.js"],
  },
  {
    id: 3,
    name: "Praveen Sharma",
    role: "Backend Engineer",
    department: "Engineering",
    image: "/images/team/Praveen-sharma.jpeg",
    bio: "Backend engineer with expertise in building scalable and efficient server-side applications. Passionate about optimizing performance and ensuring code quality.",
    experience: "6+ years in backend development",
    social: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
    },
    skills: ["Node.js", "Python", "Database Design", "API Development"],
  },
  {
    id: 4,
    name: "Chandan Singh Baghela",
    role: "Marketing Director",
    department: "Marketing",
    image: "/images/team/Chandan-Singh.png",
    bio: "Data-driven marketing strategist with expertise in digital campaigns, brand building, and growth hacking.",
    experience: "10+ years in digital marketing",
    social: {
      linkedin: "https://linkedin.com/in/sarahwilliams",
      twitter: "https://twitter.com/sarahwilliams",
    },
    skills: ["SEO", "Content Strategy", "Analytics", "Brand Management"],
  },
  {
    id: 5,
    name: "Vinod Kharol",
    role: "Data Scientist",
    department: "Engineering",
    image: "/images/team/vinod-kharol.png",
    bio: "PhD in Computer Science with a focus on machine learning and natural language processing. Builds AI-powered solutions that drive business value.",
    experience: "6+ years in AI/ML",
    social: {
      linkedin: "https://linkedin.com/in/vinodkharol",
      github: "https://github.com/vinodkharol",
    },
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Data Analysis"],
  },
//   {
//     id: 6,
//     name: "Emily Davis",
//     role: "Project Manager",
//     department: "Operations",
//     image: "/images/team/emily-davis.jpg",
//     bio: "Certified PMP with a talent for keeping projects on track and teams motivated. Ensures smooth delivery of all client projects.",
//     experience: "9+ years in project management",
//     social: {
//       linkedin: "https://linkedin.com/in/emilydavis",
//       email: "emily@company.com",
//     },
//     skills: ["Agile", "Scrum", "Risk Management", "Communication"],
//   },
];

export default function TeamPage() {
  // Group team members by department
  const departments = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <main className="relative overflow-hidden bg-[#060818] min-h-screen">
      {/* Background Glow Effects */}
      <div className="absolute left-1/2 top-[-120px] -translate-x-1/2 w-[900px] h-[300px] rounded-full bg-violet-600/30 blur-[140px]" />
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-violet-500">Team</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            We're a diverse group of passionate professionals dedicated to 
            delivering exceptional results for our clients.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex -space-x-4">
              {teamMembers.slice(0, 5).map((member) => (
                <div
                  key={member.id}
                  className="w-12 h-12 rounded-full border-2 border-violet-500/50 overflow-hidden relative"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-violet-500/20 border-2 border-violet-500/50 flex items-center justify-center text-violet-400 text-sm font-semibold">
                +{teamMembers.length - 5}
              </div>
            </div>
            <p className="text-gray-400 self-center">
              {teamMembers.length}+ team members ready to help
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid by Department - Full Width Cards */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {Object.entries(departments).map(([department, members]) => (
            <div key={department} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {department}
                <span className="text-violet-400 text-sm font-normal ml-3">
                  ({members.length} members)
                </span>
              </h2>
              {/* Use 1 column on mobile, 2 on tablet and desktop with wider gap */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="group bg-[#0F1438] rounded-xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300 border border-violet-500/10 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
                  >
                    {/* Card content with horizontal layout */}
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      {/* Image - larger */}
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-violet-500/30 group-hover:border-violet-400 transition-colors flex-shrink-0 mx-auto sm:mx-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info - expanded */}
                      <div className="flex-1 min-w-0 w-full">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-violet-400 transition-colors text-center sm:text-left">
                          {member.name}
                        </h3>
                        <p className="text-violet-400 text-base mb-2 text-center sm:text-left">
                          {member.role}
                        </p>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-3 text-center sm:text-left">
                          {member.bio}
                        </p>

                        {/* Experience */}
                        <p className="text-gray-500 text-sm mb-3 text-center sm:text-left">
                          ⚡ {member.experience}
                        </p>

                        {/* Skills - more visible */}
                        <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-sm px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-3 border-t border-violet-500/10 justify-center sm:justify-start">
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-violet-400 transition-colors"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.twitter && (
                            <a
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-violet-400 transition-colors"
                              aria-label={`${member.name}'s Twitter`}
                            >
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-violet-400 transition-colors"
                              aria-label={`${member.name}'s GitHub`}
                            >
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.email && (
                            <a
                              href={`mailto:${member.social.email}`}
                              className="text-gray-400 hover:text-violet-400 transition-colors"
                              aria-label={`Email ${member.name}`}
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 text-center border border-violet-500/20">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate 
              about making a difference. Check out our open positions!
            </p>
            <Link
              href="/careers"
              className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}