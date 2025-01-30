"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Wordpress</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Python Django</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>BOOTSTRAP</li>
          <li>PostgresQl</li>
        </ul>
      ),
    },
    {
      title: "Tools",
      id: "tools",
      content: (
        <ul className="list-disc pl-2">
          <li>Git</li>
          <li>SEMrush</li>
          <li>AHREFs</li>
          <li>Google Search Console (GSC)</li>
          <li>Google Analytics (GA4)</li>
          <li>Google Tag Manager (GTM)</li>
          <li>HARO (SOS)</li>
          <li>Featured</li>
          <li>Qwoted</li>
          <li>Google Suite</li>
          <li>Slack</li>
          <li>Canva</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>
            Bachelor's degree in computer science and mathematics (Technical
            University of Mombasa)
          </li>
          <li>High School Education</li>
          <li>Primary level</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Responsive Web Design (Free code camp)</li>
          <li>Applied Data Science (WorldQuant University)</li>
          <li>Hubspot's Inbound Marketing (Hubspot)</li>
        </ul>
      ),
    },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pt-20 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me.png"
          alt="About section image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a front end web developer as well as a search engine optimizer
            with a passion for creating interactive and responsive web
            applications. I have experience working with Wordpress, JavaScript,
            React, Redux, Node.js, Next.js, PostgreSQL, HTML, Tailwind CSS, and
            Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing experiences.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
