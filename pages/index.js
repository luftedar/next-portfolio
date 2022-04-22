import React from "react";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css"

const home = () => {
  return (
    <div className={homeStyles.main}>
      <section>
        <h1>Hello My Name is Orçun</h1>
        <h2>I am a full-stack web developer</h2>
      </section>
      <section>
        <h3>JavaScript | React.js | Redux | Next.js</h3>
        <h3>Ruby | Postgresql | Ruby on Rails</h3>
        <h4>Git | Github | Rspec | Jest | Responsive Design | Accessibility </h4>
        <h5>Pair Programming | Team Work | Remote Work</h5>
      </section>
      <Link href="/projects">See My Projects</Link>
    </div>
  )
}

export default home;