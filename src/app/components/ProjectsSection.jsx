"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "As a developer, you should definitely have your own portfolio website. There are endless benefits. But, a lot of people feel that it would be tough to make one.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Name It!",
    description:
      "Do you find it difficult to name your projects or ventures? Fear not! Check out this cool name suggestion application which will help you find the best name for your next project, venture, or startup. Keep building!",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lukoritob/nameit",
    previewUrl: "https://github.com/lukoritob/nameit",
  },
  {
    id: 3,
    title: "Wordpress Web Management",
    description:
      "This Project involved setting up the home page as well as the sites landing pages interacting with: HTML, CSS, JavaScript, Wordpress themes, Website Maintainance, Website Updates, Security Patches, & Performance Optimizations.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://reactionpower.com",
    previewUrl: "https://reactionpower.com",
  },
  {
    id: 4,
    title: "PokeDex",
    description:
      "Pokemon was a huge part of our childhood, wasn't it? Talking about pokemon brings back so many memories, but do you remember the details of each pokemon? Probably No! So here I bring you a pokedex to check all pokemons :)",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lukoritob/Pokemon-Search-App",
    previewUrl: "https://github.com/lukoritob/Pokemon-Search-App",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description:
      "Authentication and CRUD operations (including user registration, login, and password reset) and comprehensive CRUD (Create, Read, Update, Delete) operations.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Flashtype",
    description:
      "Having a good typing speed will always help you as a developer! Here, I present you the typing speed test application, where you can check your typing speed (in wpm) and share the results with your friends too.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lukoritob/typing-test-App",
    previewUrl: "https://github.com/lukoritob/typing-test-App",
  },
  {
    id: 7,
    title: "Flexbox Cheatsheet",
    description:
      "A frontend web developer must know the concepts of CSS Flexbox. So here is a CSS Flexbox cheatsheet, built using CSS Flexbox. Learn the concepts of flexbox by building a cheatsheet which is built using flexbox. Super cool!",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Search Console Data",
    description:
      "Google search console search engine optimization project data.",
    image: "/images/projects/7.png",
    tag: ["All", "SEO"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Ahrefs Site Health Data",
    description:
      "Ahrefs webmaster tool search engine optimization project data.",
    image: "/images/projects/8.png",
    tag: ["All", "SEO"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Average Organic Traffic Trajection",
    description: "Sky Blue - Organic Pages, Orange - Average Organic Traffic.",
    image: "/images/projects/9.png",
    tag: ["All", "SEO"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        id="projects"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SEO"
          isSelected={tag === "SEO"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
