import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Hello My Name is Orçun</h1>
      <hr />
      <h2>I am a full-stack web developer</h2>
      <h3>JavaScript | React.js | Redux | Next.js</h3>
      <h3>Ruby | Postgresql | Ruby on Rails</h3>
      <h4>Git | Github | Rspec | Jest | Responsive Design | Accessibility </h4>
      <h5>Pair Programming | Team Work | Remote Work</h5>
      <Link href="/Projects">See My Projects</Link>
    </div>
  )
}

export default Home;