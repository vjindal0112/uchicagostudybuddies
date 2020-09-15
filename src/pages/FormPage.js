import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import "../App.css";
import { collegeName } from "../constants"

export default function FormPage() {
  return (
    <>
      <Header title="Form" description={`Fill out this form to get paired with study buddies in your class at ${collegeName}. We only match you with people we know you will vibe with.`}/>

      {/* <Banner>Only open for SM 203!</Banner> */}
      <div className="App">
        <Form />
      </div>
    </>
  );
}
