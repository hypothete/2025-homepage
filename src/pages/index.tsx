import Head from "next/head";
import styles from "@/styles/Home.module.css";
import "photoswipe/dist/photoswipe.css";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";

import EngineeringIcon from "@/assets/gear-six-fill.svg";
import ManagementIcon from "@/assets/kanban-fill.svg";
import ProductIcon from "@/assets/package-fill.svg";
import GraphicsIcon from "@/assets/palette-fill.svg";

import EmailIcon from "@/assets/envelope-fill.svg";
import GithubIcon from "@/assets/github.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

console.log(typeof LinkedInIcon);

export default function Home() {
  return (
    <>
      <Head>
        <title>Erin Alexander</title>
        <meta
          name="description"
          content="Homepage for Erin Alexander: engineer, visual artist, writer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles["above-fold"]}>
          <img
            className={styles["above-fold__headshot"]}
            src="images/elephants-3-yrs.jpg"
            alt="A photo of Erin Alexander"
          />
          <div className={styles["above-fold__text"]}>
            <h1>Erin Alexander</h1>
            <p>
              Hi, I'm Erin! I'm a software enginer, writer, and visual artist
              from Portland, Oregon. When I'm in a professional role or making
              art for myself, my work tends to be cross-disciplinary and driven
              by systems thinking. I love what science fiction author Rudy
              Rucker terms <i>the gnarl</i> - the zone of complexity between
              order and chaos. As such, I find myself embracing that liminality
              wherever I go, whether wearing multiple hats at startups, or
              expressing myself through mixed media.
            </p>
          </div>
        </div>
        <Section title="Career">
          <p>
            I've worked since 2013 mostly in frontend developer roles at small
            businesses and startups, with a specialization in graphics on the
            web. I've also been responsible for system and cloud architecture,
            project management, and team leadership. Currently I'm looking for
            new directions to expand in my career, because I love breadth and a
            holistic understanding of how teams and businesses work.
          </p>
          <h3>Skills I have in no particular order</h3>
          <pre>
            TypeScript | React | Redux | Next.js | TanStack Query | Webpack |
            Babel | Storybook | Vite | GraphQL | WebGL | Canvas | SVG | GLSL |
            WebGPU | AWS CDK | GitHub Actions | GCP | Agile | Scrum Ceremonies |
            Ticket Breakout | A/B Testing | Technical Leadership | Hiring |
            Documentation | Roadmap Planning
          </pre>
          <h3 id="resume">Résumé - Choose your path!</h3>
          <div className={styles["resume-grid"]}>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-engineering.pdf" target="blank">
                <EngineeringIcon className={styles["resume-icon"]} />
                <h4>Engineering</h4>
              </a>
            </div>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-management.pdf" target="blank">
                <ManagementIcon className={styles["resume-icon"]} />
                <h4>Management</h4>
              </a>
            </div>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-product.pdf" target="blank">
                <ProductIcon className={styles["resume-icon"]} />
                <h4>Product</h4>
              </a>
            </div>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-graphics.pdf" target="blank">
                <GraphicsIcon className={styles["resume-icon"]} />
                <h4>Graphics</h4>
              </a>
            </div>
          </div>
        </Section>
        <Section title="Art">
          <p>Blurb about my art background and what I do now</p>
          <GalleryGrid
            items={[
              {
                alt: "a picture of my Minecraft skin",
                caption: "This has a caption!",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
              {
                alt: "a picture of my Minecraft skin",
                caption: "This has a caption too!",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
              {
                alt: "a picture of my Minecraft skin",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
              {
                alt: "a picture of my Minecraft skin",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
            ]}
          />
        </Section>
        <Section title="Writing">
          <p>
            I came out as transgender in 2022, and since then I've been writing
            essays about my experiences in transition. I use my writing as a way
            to engage with queer theory, history, and media in order to better
            understand myself and what it means to be trans.
          </p>
          <h3>Some favorites</h3>
          <ul>
            <li>Piece 1</li>
            <li>Piece 2</li>
            <li>Piece 3</li>
          </ul>
        </Section>
        <Section title="Play">
          <ul>
            <li>
              I make stickers for sticking and shirts for wearing, here are some
              pics but I'm not selling any atm
            </li>
            <li>
              I used to build a lot of fun things with microcontrollers, like
              NTSC signal generators and robots that can play a Nintendo 3DS
            </li>
            <li>
              I'm obsessed with Minecraft and have run a number of servers for
              friends. It's my way of microdosing cloud architect life
            </li>
          </ul>
          <GalleryGrid
            items={[
              {
                alt: "a picture of my Minecraft skin",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
              {
                alt: "a picture of my Minecraft skin",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
              {
                alt: "a picture of my Minecraft skin",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
              {
                alt: "a picture of my Minecraft skin",
                src: "/images/minecraft-skin.png",
                width: 453,
                height: 565,
              },
            ]}
          />
        </Section>
        <Section title="Contact Me">
          <p>
            If you want to hire me, have me write for your zine, or just be
            friends, please reach out!
          </p>
          <ul className={styles["inline-list"]}>
            <li>
              <a href="mailto:erin@hypothete.com" target="blank">
                <EmailIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a href="https://github.com/hypothete" target="blank">
                <GithubIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hypothete/" target="blank">
                <LinkedInIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/erinholographic/"
                target="blank"
              >
                <InstagramIcon className={styles["social-icon"]} />
              </a>
            </li>
          </ul>
        </Section>
      </main>
      <footer className={styles.footer}>
        Copyright Erin A. 2009-25. All rights reserved 😘
      </footer>
    </>
  );
}
