import React from "react";

const ExperienceSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-1 md:mb-2">
        Experience
      </h2>
      <section className="grid md:grid-cols-2 my-6 md:my-4 py-2 gap-4">
        <div>
          <h3 className="text-3xl font-bold text-white my-2">
            WordPress Development
          </h3>
          <h5 className="text-xl font-bold text-white my-2">Reactionpower</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md pt-1">
            {" "}
            HTML, CSS, JavaScript, Wordpress themes, Website Maintainance,
            Website Updates, Security Patches, Performance Optimizations,
            Support Specialist.
          </p>
          <p className="text-white mb-4 max-w-md pt-1">
            100+ landing pages published.
            <br />
            200+ blogs posts published.
            <br />
            90% site health score.
          </p>

          <h3 className="text-3xl font-bold text-white my-2 pt-5">
            Virtual Assistance
          </h3>
          <h5 className="text-xl font-bold text-white my-2">
            LizDae Enterprises, Reactionpower
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md pt-1">
            {" "}
            Admin Tasks, Research, Data Entry, Newsletter Creation, Calender
            Management.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white my-2">
            Search Engine Optimization (SEO)
          </h3>
          <h5 className="text-xl font-bold text-white my-2">
            Reactionpower, H2M Solutions
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md pt-1">
            {" "}
            Content Strategy, Keyword Research, Backlinking, On-page & Off-page
            ​Optimization, Content Gap Analysis, Competitive Analysis, Site
            Audits.
          </p>
          <p className="text-white mb-4 max-w-md pt-1">
            400% increase in domain authority rating.
            <br />
            1427% average increase in organic traffic in 2 years.
            <br />
            2​1,900% increase in organic leads.
            <br />
            35% inc​rease in average organic revenue.
          </p>

          <h3 className="text-3xl font-bold text-white my-2 pt-2">
            Lead Prospecting
          </h3>
          <h5 className="text-xl font-bold text-white my-2">
            Jolly SEO, Reactionpower
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md pt-1">
            {" "}
            Prospecting, Scoring, Outreach
          </p>
          <p className="text-white mb-4 max-w-md pt-1">
            200% increase in leads
            <br />
            5.00% MQL to SQL conversion rate.
          </p>
        </div>
      </section>
    </>
  );
};
export default ExperienceSection;
