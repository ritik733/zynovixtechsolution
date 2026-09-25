import Image from "next/image";
import Link from "next/link";

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
    role: "CEO & Founder",
    department: "Executive",
    image: "/images/team/pukhraj-tater.jpg",
    bio: "Visionary leader with 4+ years of experience in enterprise software strategy, ERP implementations, and business solutions. Passionate about building software that drives real operational efficiency.",
    experience: "4+ years in tech leadership",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "john@company.com",
    },
    skills: ["Leadership", "Business Strategy", "ERP Systems", "Digital Transformation"],
  },
  {
    id: 2,
    name: "Piyush Dadhich",
    role: "Lead Full-Stack Developer",
    department: "Engineering",
    image: "/images/team/jane-smith.jpg",
    bio: "Full-stack engineer specialized in React, Next.js, and modern cloud architecture. Dedicated to building high-converting websites and scalable business platforms.",
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
    role: "Backend & Systems Engineer",
    department: "Engineering",
    image: "/images/team/mike-johnson.jpg",
    bio: "Backend engineer with expertise in building scalable server-side systems, database architecture, and workflow automation pipelines.",
    experience: "6+ years in backend development",
    social: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      twitter: "https://twitter.com/mikejohnson",
    },
    skills: ["Node.js", "Python", "Database Design", "Workflow Automation"],
  },
  {
    id: 4,
    name: "Chandan Singh Baghela",
    role: "Marketing Director",
    department: "Marketing",
    image: "/images/team/sarah-williams.jpg",
    bio: "Growth strategist with expertise in B2B tech campaigns, client acquisition, brand positioning, and digital market expansion.",
    experience: "10+ years in digital marketing",
    social: {
      linkedin: "https://linkedin.com/in/sarahwilliams",
      twitter: "https://twitter.com/sarahwilliams",
    },
    skills: ["B2B Strategy", "Growth Marketing", "Analytics", "Brand Management"],
  },
  {
    id: 5,
    name: "Vinod Kharol",
    role: "ERP & Systems Architect",
    department: "Engineering",
    image: "/images/team/vinod-kharol.jpg",
    bio: "Senior systems engineer specializing in enterprise resource planning, Frappe / ERPNext ecosystems, and multi-branch database integrations that optimize operations.",
    experience: "6+ years in systems architecture",
    social: {
      linkedin: "https://linkedin.com/in/vinodkharol",
      github: "https://github.com/vinodkharol",
    },
    skills: ["ERP Systems", "Frappe", "PostgreSQL", "System Automation", "Python"],
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
    <main className="relative overflow-hidden bg-transparent min-h-screen">
      {/* Background Glow Effects */}
      <div className="absolute left-1/2 top-[-100px] -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[900px] h-[220px] sm:h-[300px] rounded-full bg-violet-600/25 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-xs sm:text-sm text-violet-400 mb-4 backdrop-blur-sm">
            <span>👥</span>
            <span>Innovators & Builders</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
            Meet Our <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            We're a diverse group of passionate professionals dedicated to 
            delivering exceptional results with modern web engineering, ERP systems, and business automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="flex -space-x-3 sm:-space-x-4">
              {teamMembers.slice(0, 5).map((member) => (
                <div
                  key={member.id}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-violet-500/50 overflow-hidden relative shadow-md shadow-violet-500/20 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold"
                >
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-500/20 border-2 border-violet-500/50 flex items-center justify-center text-violet-400 text-xs sm:text-sm font-semibold">
                +{teamMembers.length - 5}
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-medium">
              {teamMembers.length}+ team members ready to help
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid by Department - Full Width Cards */}
      <section className="py-8 sm:py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {Object.entries(departments).map(([department, members]) => (
            <div key={department} className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
                <span>{department}</span>
                <span className="text-violet-400 text-xs sm:text-sm font-normal px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                  {members.length} {members.length === 1 ? "member" : "members"}
                </span>
              </h2>
              {/* Use 1 column on mobile, 2 on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="group bg-[#0B0F2A]/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 hover:transform hover:-translate-y-1 transition-all duration-300 border border-violet-500/20 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10"
                  >
                    {/* Card content with horizontal/vertical responsive layout */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                      {/* Image */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-violet-500/40 group-hover:border-violet-400 transition-colors shrink-0 shadow-lg shadow-violet-500/10 bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 w-full text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                          {member.role}
                        </p>
                        <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Experience */}
                        <p className="text-gray-400 text-xs sm:text-sm mb-3">
                          ⚡ <span className="text-gray-300">{member.experience}</span>
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 justify-center sm:justify-start">
                          {member.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Social Links with min 44px touch target */}
                        <div className="flex items-center gap-1 sm:gap-2 pt-3 border-t border-violet-500/15 justify-center sm:justify-start">
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-violet-400 transition-colors p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-violet-500/10"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.twitter && (
                            <a
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-violet-400 transition-colors p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-violet-500/10"
                              aria-label={`${member.name}'s Twitter`}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-violet-400 transition-colors p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-violet-500/10"
                              aria-label={`${member.name}'s GitHub`}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {member.social.email && (
                            <a
                              href={`mailto:${member.social.email}`}
                              className="text-gray-400 hover:text-violet-400 transition-colors p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-violet-500/10"
                              aria-label={`Email ${member.name}`}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-14 sm:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-violet-950/40 via-blue-950/40 to-slate-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center border border-violet-500/20 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
              We're always looking for talented individuals who are passionate 
              about making a difference. Check out our open positions!
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="w-full min-[400px]:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[44px]"
              >
                Let's Connect →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}