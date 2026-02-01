const config = {
  title: "Priyanshu Solanki | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Priyanshu, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Priyanshu, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Priyanshu",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Priyanshu Solanki",
  email: "naresh.khatri2345@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "Priyanshu91930",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/priyanshu-solanki-625b81301/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Priyanshu91930",
  },
};
export { config };
