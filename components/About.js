import React from 'react'
import styles from '../styles/About.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <article>
        <figure>
          <Image src="/profile-pic.png"
            alt="Developer Picture"
            width="613px"
            height="670px"
            style={{ zIndex: 1 }}
          />
        </figure>
        <section>
          <hgroup>
            <h2>Who <span><p>AM</p></span> I?</h2>
          </hgroup>
          <article>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem
              Ipsum passages, and
            </p>
          </article>
          <mark>
            <span>
              <p>Find Me :  </p>
            </span>
            <span>
              <img src="" alt="" />
            </span>
            <span>
              <img src="" alt="" />
            </span>
          </mark>
          <div>
            <button>See My Resume</button>
          </div>
        </section>
      </article>
    </div>
  )
}

export default About