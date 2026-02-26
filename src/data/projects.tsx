import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
// New skill definitions needed for the projects
const c = {
  title: "C Programming",
  bg: "black",
  fg: "white",
  icon: "C",
};

const reactNative = {
  title: "React Native",
  bg: "black",
  fg: "white",
  icon: <RiReactjsFill />,
};

const googleMaps = {
  title: "Google Maps API",
  bg: "black",
  fg: "white",
  icon: "🗺️",
};

const projects: Project[] = [
  {
    id: "pyq-app",
    category: "Mobile App",
    title: "Previous Year Board Paper App",
    src: "/assets/projects-screenshots/pyq-app/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [reactNative],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive mobile application built with React Native that provides students with easy access to previous year board papers. Successfully deployed on Google Play Store.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Access to previous year board papers</li>
            <li className="font-mono">Firebase backend for real-time data sync</li>
            <li className="font-mono">Deployed on Google Play Store</li>
            <li className="font-mono">User-friendly interface for students</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "cashmate",
    category: "FinTech",
    title: "Cashmate: Cash Sharing Platform",
    src: "/assets/projects-screenshots/cashmate/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/cashmate",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-stack MERN application for managing and sharing expenses among groups. Simplifies bill splitting and tracks shared expenses with ease.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">MongoDB for database management</li>
            <li className="font-mono">Express.js backend API</li>
            <li className="font-mono">React frontend with modern UI</li>
            <li className="font-mono">Node.js server-side logic</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "busmate",
    category: "Transportation",
    title: "Busmate: Bus Tracking Platform",
    src: "/assets/projects-screenshots/busmate/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, googleMaps],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/busmate",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A real-time bus tracking platform built with TypeScript and integrated with Google Maps API. Helps students and commuters track bus locations in real-time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Real-time bus location tracking</li>
            <li className="font-mono">Google Maps API integration</li>
            <li className="font-mono">Route optimization</li>
            <li className="font-mono">Estimated arrival times</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "unipath",
    category: "Education",
    title: "UniPath: University Path Finder",
    src: "/assets/projects-screenshots/unipath/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/UniPath",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A smart university path-finding application that helps students navigate academic journeys, find relevant courses, and plan their educational roadmap efficiently.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Academic path planning and visualization</li>
            <li className="font-mono">Course recommendation engine</li>
            <li className="font-mono">Built with JavaScript and React</li>
            <li className="font-mono">Intuitive UI for students</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "travel-grid",
    category: "Travel",
    title: "TravelGrid: Travel Listing Platform",
    src: "/assets/projects-screenshots/travel-grid/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/TravelGrid",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A full-featured travel listing and booking platform where users can discover, list, and review travel destinations. Built with a JavaScript/Node.js stack.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Browse and list travel destinations</li>
            <li className="font-mono">User reviews and ratings</li>
            <li className="font-mono">MongoDB database for listings</li>
            <li className="font-mono">REST API with Express.js</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "rename-bot",
    category: "Telegram Bot",
    title: "Rename Bot 4GB: Telegram File Renamer",
    src: "/assets/projects-screenshots/rename-bot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/Rename-Bot-4GB",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A powerful Telegram bot that renames files up to 4GB+, supports permanent thumbnail embedding, metadata modification, and can convert files into video format — all via Telegram.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Supports files up to 4GB and beyond</li>
            <li className="font-mono">Permanent thumbnail support</li>
            <li className="font-mono">Metadata modification capabilities</li>
            <li className="font-mono">File-to-video conversion</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "file-to-link",
    category: "Telegram Bot",
    title: "FileToLink: Fastest Telegram File Bot",
    src: "/assets/projects-screenshots/file-to-link/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/FileToLink",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The fastest Telegram File-to-Link bot built on the Kurigram platform. Instantly generates direct download links for any Telegram file, enabling seamless file sharing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Instant direct link generation</li>
            <li className="font-mono">Built on the Kurigram platform</li>
            <li className="font-mono">Handles large Telegram files efficiently</li>
            <li className="font-mono">Simple bot command interface</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "mirror-leech-bot",
    category: "Telegram Bot",
    title: "Mirror Leech Bot: Advanced Downloader",
    src: "/assets/projects-screenshots/mirror-leech-bot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.docker],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/mirror-leech-telegram-bot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A feature-rich Telegram bot that can download direct links, torrents, NZBs, Google Drive files, Telegram documents, and content from any yt-dlp supported site, then mirror or leech them to cloud storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Supports torrents, direct links, NZBs & more</li>
            <li className="font-mono">Google Drive and rclone cloud integration</li>
            <li className="font-mono">yt-dlp for media site downloads</li>
            <li className="font-mono">Dockerized for easy deployment</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "classroom-scheduler",
    category: "Education",
    title: "C Based Classroom Scheduler",
    src: "/assets/projects-screenshots/classroom-scheduler/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [c],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/C-based-classroom-scheduller",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A command-line application built with C Programming that efficiently schedules classroom assignments using advanced data structures and algorithms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Highlights</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Efficient scheduling algorithms</li>
            <li className="font-mono">Advanced data structures implementation</li>
            <li className="font-mono">Conflict resolution system</li>
            <li className="font-mono">Resource optimization</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "college-hackathon",
    category: "Event Website",
    title: "College Hackathon Website",
    src: "/assets/projects-screenshots/college-hackathon/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "#",
    github: "https://github.com/Priyanshu91930/hackathonn",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A fully responsive website built with ReactJS and Firebase for hosting college hackathon events. Features modern design and seamless user experience for participants and organizers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Responsive design for all devices</li>
            <li className="font-mono">Firebase backend integration</li>
            <li className="font-mono">Event registration system</li>
            <li className="font-mono">Team management functionality</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
