import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="/">
        <h1>Home</h1>
      </section>
      <section id="about">
        <h1>About</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
      <section id="portflio">
        <h1>Portfolio</h1>
      </section>
    </div>
  );
}
