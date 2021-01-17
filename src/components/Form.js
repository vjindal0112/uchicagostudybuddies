import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Question from "./Question";
import Privacy from "./Privacy";
import { withRouter } from "react-router-dom";
import SelectBar from "./SelectBar";
import Slider from "./Slider";
import { SaveBanner } from "./styles";

const Form = ({ history }) => {
  const [data, setData] = useState({
    name: "",
    year: "",
    gender: "",
    class: "",
    interest: "2",
    "binge-study": "2",
    "student-org": "",
    email: "",
  });

  const [animate, setAnimate] = useState(false); // for Save Confirmation Banner

  const keys = [
    "name",
    "year",
    "gender",
    "class",
    "interest",
    "binge-study",
    "student-org",
    "email",
  ];

  function bannerUp() {
    setAnimate(false);
  }

  function checkEmail() {
    const spamWords = [
      "a",
      "test",
      "spam",
      "shit",
      "fuck",
      "bitch",
      "cock",
      "cunt",
      "dick",
      "faggot",
      "ass",
      "titty",
      "titties",
    ];
    const specialChars = ["!", "*", "&", "^", "$", "#"];

    if (!data["email"].toLowerCase().includes("@uchicago.edu")) {
      alert("Please enter your @uchicago.edu email");
      return false;
    }

    let tempEmail = data["email"].toLowerCase().trim();
    let before = tempEmail.substr(0, tempEmail.indexOf("@"));

    let spam = false;
    spamWords.map((word, index) => {
      if (before == word) {
        spam = true;
      }
    });

    specialChars.map((char, index) => {
      if (tempEmail.includes(char)) {
        spam = true;
      }
    });

    if (tempEmail.split("@").length - 1 > 1) {
      spam = true;
    }
    if (
      !(
        tempEmail.toLowerCase().slice(tempEmail.length - 13) === "@uchicago.edu"
      ) ||
      before.includes(" ") ||
      spam ||
      before.length <= 1
    ) {
      alert("Please enter a valid email");
      return false;
    }
    return true;
  }

  function pushToSheets(anotherClass) {
    if (!checkEmail()) {
      return false;
    }

    // UNCOMMENT to check for all filled in
    for (var i = 0; i < keys.length; i++) {
      if (!data[keys[i]]) {
        alert("Please fill in all fields");
        return false;
      }

      if (keys[i] == "class") {
        let selected = data[keys[i]];
        let found = false;
        for (var k = 0; k < options.length; ++k) {
          // iterate through all classes
          if (selected == options[k]["value"]) {
            found = true;
          }
        }
        if (!found) {
          alert("Please enter a class on the list");
          window.scrollTo({
            top: window.innerHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          return false;
        }
      }
    }

    var formData = new FormData();
    for (var key in data) {
      if (key == "email") {
        formData.append(key, data[key].toLowerCase().trim());
      } else {
        formData.append(key, data[key].trim());
      }
    }
    setData({ ...data, class: "", interest: "2", ambition: "" });
    fetch(
      "https://script.google.com/macros/s/AKfycbyjdTT8djPrKH_olhByeHmOXKtc1Iawrdz9u2b2-DO03gRDqbS3zyZp/exec",
      { method: "POST", body: formData }
    );
    console.log("working");
    if (anotherClass) {
      setAnimate(true);
      setTimeout(bannerUp, 4000);
      window.scrollTo({
        top: window.innerHeight * 4,
        left: 0,
        behavior: "smooth",
      });
    }
    return true;
  }

  function submit() {
    if (pushToSheets()) {
      history.push("/submitted");
    }
  }

  function onChangeListener(key, value) {
    setData({ ...data, [key]: value });
  }

  useEffect(() => {}, [data]);

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      autoScrolling={false}
      fitToSection={false}
      render={({ state, fullpageApi }) => {
        return (
          <>
            <ReactFullpage.Wrapper>
              <SaveBanner animate={animate}>
                Saved your class, fill out these 3 fields for another
              </SaveBanner>
              <Privacy
                message="Once you fill this out, we'll match you with 3 buddies in your class based on the similarity of your responses"
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                buttonMessage="Let's get started"
              />

              <Question
                title="To start off, what's your full name?"
                label="Full Name"
                keyName={keys[0]}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[0]]}
              />

              <SelectBar
                title="What year are you?"
                label="Year"
                keyName={keys[1]}
                choices={year}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[1]]}
              />

              <SelectBar
                title="How do you identify?"
                label="Gender"
                keyName={keys[2]}
                choices={gender}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[2]]}
              />

              <SelectBar
                title="Which class are you taking?"
                label="Class"
                keyName={keys[3]}
                choices={options}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[3]]}
              />

              <Slider
                title="I am interested in taking this class"
                keyName={keys[4]}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[4]]}
              />

              <Slider
                title="I usually binge study a couple of days before a midterm"
                keyName={keys[5]}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[5]]}
              />

              <SelectBar
                title="Which type of student org are you most involved in?"
                label="Select affiliation"
                keyName={keys[6]}
                choices={orgs}
                moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
                onChange={onChangeListener}
                initial={data[keys[6]]}
              />

              <Question
                title="What's your UChicago email?"
                label="Email"
                keyName={keys[7]}
                moveSectionDown={pushToSheets}
                onChange={onChangeListener}
                submitFunction={submit}
                submit={true}
                initial={data[keys[7]]}
              />
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
};

export default withRouter(Form);

const orgs = [
  { value: "Greek Life", label: "Greek Life" },
  { value: "Business", label: "Business" },
  { value: "Medical", label: "Medical" },
  { value: "Engineering", label: "Engineering" },
  { value: "Sports", label: "Sports" },
  {
    value: "Social - but not Greek Life",
    label: "Social - but not Greek Life",
  },
  { value: "Other", label: "Other" },
  { value: "None yet!", label: "None yet!" },
];

const grades = [
  { value: " A+", label: "A+" }, // have to make spaces before every grade so that there are two characters
  { value: " A", label: "A" }, // because of react-select's super weird event listeners
  { value: " A-", label: "A-" },
  { value: " B+", label: "B+" },
  { value: " B", label: "B" },
  { value: " B-", label: "B-" },
  { value: " C+", label: "C+" },
  { value: " C", label: "C" },
  { value: "just pass", label: "just pass" },
];

const year = [
  { value: "First Year", label: "First Year" },
  { value: "Second Year", label: "Second Year" },
  { value: "Third Year", label: "Third Year" },
  { value: "Fourth Year", label: "Fourth Year" },
  { value: "Fifth Year", label: "Fifth Year" },
];

const gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non-Binary", label: "Non-Binary" },
  { value: "Prefer not to say", label: "Prefer not to say" },
];

const options = [{ value: "ECON 20200", label: "ECON 20200" }];
