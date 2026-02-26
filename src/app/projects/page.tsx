"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Previous Year Board Paper App",
    description: `A comprehensive mobile application built with React Native that provides students with easy access to previous year board papers. Successfully deployed on Google Play Store.`,
    link: "#",
    images: ["/assets/projects-screenshots/pyq-app/landing.png"],
  },
  {
    id: 2,
    name: "Cashmate",
    description: `A full-stack MERN application for managing and sharing expenses among groups. Simplifies bill splitting and tracks shared expenses with ease.`,
    link: "https://github.com/Priyanshu91930/cashmate",
    images: ["/assets/projects-screenshots/cashmate/landing.png"],
  },
  {
    id: 3,
    name: "Busmate",
    description: `A real-time bus tracking platform built with TypeScript and integrated with Google Maps API. Helps students and commuters track bus locations in real-time.`,
    link: "https://github.com/Priyanshu91930/busmate",
    images: ["/assets/projects-screenshots/busmate/landing.png"],
  },
  {
    id: 4,
    name: "UniPath",
    description: `A smart university path-finding application that helps students navigate academic journeys, find relevant courses, and plan their educational roadmap efficiently.`,
    link: "https://github.com/Priyanshu91930/UniPath",
    images: ["/assets/projects-screenshots/unipath/landing.png"],
  },
  {
    id: 5,
    name: "TravelGrid",
    description: `A full-featured travel listing and booking platform where users can discover, list, and review travel destinations. Built with a JavaScript/Node.js stack.`,
    link: "https://github.com/Priyanshu91930/TravelGrid",
    images: ["/assets/projects-screenshots/travel-grid/landing.png"],
  },
  {
    id: 6,
    name: "Mirror Leech Bot",
    description: `A feature-rich Telegram bot that can download direct links, torrents, NZBs, Google Drive files, and content from any yt-dlp supported site.`,
    link: "https://github.com/Priyanshu91930/mirror-leech-telegram-bot",
    images: ["/assets/projects-screenshots/mirror-leech-bot/landing.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
