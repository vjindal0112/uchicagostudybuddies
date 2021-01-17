import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import Header from "../components/Header";
import CountUp from "react-countup";
import { Button, UserCount, Heading } from "../components/styles"; // styles used for shared styles
import { collegeName } from "../constants";
import ReactGA from "react-ga";

const Logo = styled.img`
  max-height: 40vh;
  margin-top: 30px;
`;

const Section = styled.section`
  text-align: center;
  padding: ${(props) => props.padding};
  color: #333;
  background-color: ${(props) => props.backgroundColor};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
`;

const OuterFlex = styled.div`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  @media (min-width: 550px) {
    padding-left: 50px;
  }
`;

const BulletText = styled.div`
  margin-left: 20px;
  font-size: 24px;
  color: black;
  display: flex;
  text-align: left;
`;

const TextDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
`;

const BgImage = styled.div`
  /* background-image: url('/campusBackground.jpg');/*linear-gradient( #008024, #008024);/*#ff8c8c, #feb2b2); */
  /* background-repeat: no-repeat;
  background-size: cover;  */
  background-color: #fafafa;
  width: 100%;
  position: absolute;
  height: 88vh;
  min-height: 88vh;
  z-index: -2;
`;

const BgOverlay = styled.div`
  /* background-image: linear-gradient(45deg, rgba(2,20,80,.5), rgba(2,50,100, 1)); */
  background-image: linear-gradient(#8080d9, #ab9edb);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: absolute;
  height: 88vh;
  min-height: 88vh;
  z-index: -1;
`;

const BulletPoints = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: #8b0000;
  font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  flex-shrink: 0;
`;

const drop = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  20% {
    height: 40px;
    opacity: 1;
  }

  90% {
    height: 40px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  background-color: #ffcb05;
  color: #00274c;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`;

export default function Home() {
  const [userCount, setUserCount] = useState(1500);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwYnGurKTSvk5N4-tAjSxBO3HMAcmaDnZqetanlzO81e0PrKwo/exec"
    )
      .then((snapshot) => snapshot.json())
      .then((num) => setUserCount(parseInt(num.number)));
  });

  return (
    <>
      <Header />
      <BgOverlay />
      <BgImage />
      <div className="App" style={{ height: "88vh", minHeight: "88vh" }}>
        <Logo src={logo} />
        <Heading>{collegeName} StudyBuddies</Heading>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          <div>Join</div>
          <UserCount>
            <CountUp start={1500} end={userCount} />
          </UserCount>
          <div>Maroons</div>
        </div>
        <Button
          href="/form"
          onClick={() => {
            ReactGA.event({
              category: "Navigation",
              action: "Click",
              label: "Find your Buddies",
            });
          }}
        >
          Find your Buddies
        </Button>
      </div>
      <Section padding="20px" backgroundColor="#fefefe">
        <h1 style={{ textAlign: "center" }}>How it works</h1>
        <OuterFlex>
          <Flex>
            <BulletPoints>1</BulletPoints>
            <BulletText>Fill out a 60 second form</BulletText>
          </Flex>
          <br />
          <Flex>
            <BulletPoints>2</BulletPoints>
            <BulletText>Get your buddies Jan. 31</BulletText>
          </Flex>
          <br />
          <Flex>
            <BulletPoints>3</BulletPoints>
            <BulletText>Make your group chat!</BulletText>
          </Flex>
        </OuterFlex>
      </Section>
      <Section padding="50px" backgroundColor="#f2f2f2">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>Get connected</h1>
          <p>
            We match you with a group of 4 people based on your study habits,
            interests, and club affiliations. You’ll only be matched with people
            in your class.
          </p>
          <p>
            All of this data will be completely private, so you have nothing to
            worry about.
          </p>
        </TextDiv>
      </Section>
      <Section padding="50px" backgroundColor="#fefefe">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>We make it easy</h1>

          <p>
            Zoom University makes it really hard to find friends in your
            classes. We’ll faciliate a group chat for you so it’s easy to reach
            out.{" "}
          </p>
        </TextDiv>
      </Section>

      <Section padding="50px" backgroundColor="#f2f2f2">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>FAQ</h1>

          <p>
            <b>Can I fill the form out for more than one class?</b>
          </p>
          <p>For this semester, we are only offering it for ECON 20200</p>
          <p>
            <b>When is the last day I can fill this out?</b>
          </p>
          <p>
            The form will close on January 29th at noon because we want to get
            you your StudyBuddies by January 31st.
          </p>
          <p>
            <b>Where can I find more information?</b>
          </p>
          <p>
            Check out our medium post here:{" "}
            <a href="https://medium.com/@vjindal0112/why-we-made-studybuddies-493beda5d8f7">
              Why We Made StudyBuddies
            </a>
          </p>
        </TextDiv>
      </Section>
    </>
  );
}
