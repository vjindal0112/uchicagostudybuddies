import React from "react";
import { Helmet } from "react-helmet";
import { collegeName } from "../constants"

export default function Header({title, description}) {
  return (
    <>
      <Helmet
        title={title ? `${title} | ${collegeName} StudyBuddies` : `${collegeName} StudyBuddies`}
        meta={[
          {
            name: "description",
            content:
              description ? description : `Get paired with study buddies in your class at ${collegeName}. We only match you with people we know you will vibe with.`,
          },
          {
            name: "og:title", 
            content: title ? `${title} | ${collegeName} StudyBuddies` : `${collegeName} StudyBuddies`,
          },
          {
            name: "og:description",
            content:
            description ? description : `Get paired with study buddies in your class at ${collegeName}. We only match you with people we know you will vibe with.`,
          },
          { name: "og:url", content: "https://uchicago.studybuddies.ai" },
          {
            name: "og:image",
            content: "https://uchicago.studybuddies.ai/SocialSharing.png",
          },
          {
            name: "twitter:url",
            content: "https://uchicago.studybuddies.ai",
          },
          {
            name: "twitter:title",
            content: title ? `${title} | ${collegeName} StudyBuddies` : `${collegeName} StudyBuddies`,
          },
          {
            name: "twitter:description",
            content: "Find study buddies in your classes",
          },
          {
            name: "twitter:image",
            content: "https://uchicago.studybuddies.ai/SocialSharing.png",
          },
        ]}
      >
        {/* <link rel="canonical" href="https://uchicago.studybuddies.ai" /> */}
      </Helmet>
    </>
  );
}
