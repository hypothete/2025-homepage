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
import YoutubeIcon from "@/assets/youtube.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import { oldArtGrid, newArtGrid, playGrid } from "@/data/galleries";

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
              Hi, I'm Erin! I'm a software engineer, writer, and visual artist
              from Portland, Oregon. When I'm in a professional role or making
              art for myself, my work tends to be cross-disciplinary and driven
              by systems thinking. I'm drawn to what science fiction author Rudy
              Rucker terms <i>the gnarl</i>—the zone of complexity between order
              and chaos. I embrace that liminality, whether I'm wearing multiple
              hats at startups or expressing myself through multimedia.
            </p>
          </div>
        </div>
        <Section title="Career">
          <p>
            I've worked since 2013 mostly in frontend developer roles at small
            businesses and startups. I've been responsible for complex
            visalizations, system and cloud architecture, project management,
            and team leadership. Currently I'm seeking new directions in my
            career, because I love breadth and a holistic understanding of how
            teams and businesses work.
          </p>
          <h3>An unordered list of my skills</h3>
          <pre>
            TypeScript | React | Redux | Next.js | TanStack Query | Webpack |
            Storybook | Vite | GraphQL | WebGL | Canvas | SVG | GLSL | WebGPU |
            AWS CDK | GitHub Actions | GCP | Agile | Scrum Ceremonies | Ticket
            Breakout | A/B Testing | Technical Leadership | Hiring |
            Documentation | Roadmap Planning
          </pre>
          <h3 id="resume">Résumé - Choose your path!</h3>
          <div className={styles["resume-grid"]}>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-engineering.pdf" target="blank" rel="noopener noreferrer">
                <EngineeringIcon className={styles["resume-icon"]} />
                <h4>Engineering</h4>
              </a>
            </div>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-management.pdf" target="blank" rel="noopener noreferrer">
                <ManagementIcon className={styles["resume-icon"]} />
                <h4>Management</h4>
              </a>
            </div>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-product.pdf" target="blank" rel="noopener noreferrer">
                <ProductIcon className={styles["resume-icon"]} />
                <h4>Product</h4>
              </a>
            </div>
            <div className={styles["resume-grid__item"]}>
              <a href="resumes/Erin Alexander-graphics.pdf" target="blank" rel="noopener noreferrer">
                <GraphicsIcon className={styles["resume-icon"]} />
                <h4>Graphics</h4>
              </a>
            </div>
          </div>
        </Section>
        <Section title="Art">
          <p>
            I graduated from college in 2009 with a degree in art and art
            history. After school I was deeply involved in the Net Art scene and
            the art collective dump.fm until late 2012, exhibiting work and
            rubbing shoulders with new media artists and GIF-makers. I started
            to find myself more drawn to the web itself as a medium, and
            translated my skills into an engineering career.
          </p>
          <GalleryGrid items={oldArtGrid} />
          <p>
            These days I mostly paint from photos with paint markers on board,
            and design vector art for shirts and stickers to share with my
            friends.
          </p>
          <GalleryGrid items={newArtGrid} />
        </Section>
        <Section title="Writing">
          <p>
            I came out as transgender in 2022, and since then I've been writing
            essays on my blog{" "}
            <a href="https://humankibble.com" target="blank" rel="noopener noreferrer">
              Human Kibble
            </a>{" "}
            about my experiences in transition. I write to engage with queer
            theory, history, and media in order to better understand myself and
            what it means to be trans.
          </p>
          <h3>Some favorites</h3>
          <ul>
            <li>
              <a
                href="https://humankibble.com/posts/common-ally-slurs/"
                target="blank" rel="noopener noreferrer"
              >
                Common Ally Slurs
              </a>
              —when truisms hurt, and what to say instead
            </li>
            <li>
              <a
                href="https://humankibble.com/posts/visibility-tanking/"
                target="blank" rel="noopener noreferrer"
              >
                Visibility Tanking
              </a>
              —a strategy for taking space
            </li>
            <li>
              <a href="https://humankibble.com/posts/my-dolls/" target="blank" rel="noopener noreferrer">
                My Dolls
              </a>
              —a machinima essay on reclaiming my past
            </li>
            <li>
              <a href="https://humankibble.com/posts/epe-baby/" target="blank" rel="noopener noreferrer">
                EPE, baby
              </a>
              —an interactive exercise in absurdism
            </li>
          </ul>
        </Section>
        <Section title="Play">
          <p>
            Outside of work and art, I dabble in electronics, graphics
            technologies, and game development. Here are a few random
            accomplishments:
          </p>
          <ul>
            <li>Competed in 4 Ludum Dare 48 hour game jam competitions</li>
            <li>
              Designed two light field renderers, a toy rasterizer with a scene
              graph, and a realtime WebGPU raytracer
            </li>
            <li>
              Hosted too many custom Minecraft servers to count (my way of
              microdosing Linux)
            </li>
            <li>
              Once wrote a Duck Hunt-style game for my cats that detected their
              pounces on the TV
            </li>
          </ul>
          <GalleryGrid items={playGrid} />
        </Section>
        <Section title="Contact Me">
          <p>
            If you want to hire me, have me write for your zine, or just be
            friends, please reach out!
          </p>
          <ul className={styles["inline-list"]}>
            <li>
              <a href="mailto:erin@hypothete.com" target="blank" rel="noopener noreferrer">
                <EmailIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a href="https://github.com/hypothete" target="blank" rel="noopener noreferrer">
                <GithubIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hypothete/" target="blank" rel="noopener noreferrer">
                <LinkedInIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/erinholographic/"
                target="blank" rel="noopener noreferrer"
              >
                <InstagramIcon className={styles["social-icon"]} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Hypothete/videos"
                target="blank" rel="noopener noreferrer"
              >
                <YoutubeIcon className={styles["social-icon"]} />
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
