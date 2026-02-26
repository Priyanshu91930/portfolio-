const config = {
  title: "Priyanshu Solanki | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Priyanshu Solanki, a full-stack developer specializing in mobile apps, web applications, and automation bots. Discover my latest work including Busmate, Cashmate, UniPath, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Priyanshu Solanki, a full-stack developer creating mobile apps, web apps, and powerful automation bots.",
  },
  keywords: [
    "Priyanshu",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Busmate",
    "Cashmate",
    "UniPath",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Priyanshu Solanki",
  email: "solankipriyanshu94@gmail.com",
  site: "https://priyanshu91930.github.io/portfolio-",

  // for github stars button
  githubUsername: "Priyanshu91930",
  githubRepo: "portfolio-",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/priyanshu-solanki-625b81301/",
    instagram: "https://www.instagram.com/priyanshusolanki.20/",
    facebook: "",
    github: "https://github.com/Priyanshu91930",
  },
};
export { config };
