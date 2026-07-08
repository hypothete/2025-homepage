import styles from "@/styles/Home.module.css";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";

import EmailIcon from "@/assets/envelope-fill.svg";
import GithubIcon from "@/assets/github.svg";
import InstagramIcon from "@/assets/instagram.svg";
import BlueskyIcon from "@/assets/bluesky.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import { oldArtGrid, newArtGrid, playGrid } from "@/data/galleries";

export default function Home() {
  return (
    <Layout>
      <div className={styles["above-fold"]}>
        <img
          className={styles["above-fold__headshot"]}
          src="images/headshot-2026.jpg"
          alt="A photo of Erin Alexander taken by Alana Storm"
        />
        <div className={styles["above-fold__text"]}>
          <h1>Erin Alexander</h1>
          <p>
            Hi, I&apos;m Erin! I&apos;m a software engineer, writer, and visual
            artist from Portland, Oregon.
          </p>
        </div>
      </div>
      <Section title="Career">
        <p>
          I&apos;ve worked since 2013 in software engineer and team lead roles
          at small businesses and startups. I&apos;ve been responsible for
          complex visualizations, system and cloud architecture, project
          management, and team leadership.
        </p>
        <h3>
          An unordered list of my skills,{" "}
          <a href="./resumes/erin-alexander-resume.pdf">
            more in my résumé
          </a>
        </h3>
        <pre>
          React | TypeScript | Next.js | AWS CDK | GitHub Actions | Google Cloud
          Platform | Mentorship | Developer Experience | Cross-functional
          Collaboration | Agile/Scrum Facilitation | Roadmap Development | WebGL
          | Three.js | WebGPU | Canvas | SVG | D3.js | Recharts | Redux |
          TanStack Query | Webpack | Babel | Storybook | Vite | GraphQL |
          Technical Discovery | A/B Testing
        </pre>
      </Section>
      <Section title="Art">
        <p>
          I graduated from college in 2009 with a degree in art and art history.
          After school I started to find myself more drawn to the web itself as
          a medium, and translated my skills into an engineering career.
        </p>
        <GalleryGrid items={oldArtGrid} />
        <p>
          These days I mostly paint from photos with paint markers on board, and
          design vector art for shirts and stickers to share with my friends.
        </p>
        <GalleryGrid items={newArtGrid} />
      </Section>
      <Section title="Writing">
        <p>
          Since 2022, I&apos;ve written essays and hypertext on my blog{" "}
          <a
            href="https://humankibble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human Kibble
          </a>{" "}
          about my experiences in transition. More recently, I was published in
          issue 4 of{" "}
          <a
            href="https://www.transplantszine.org/product/transplants-issue-4"
            target="_blank?"
          >
            TRANSplants
          </a>{" "}
          zine. 🏳️‍⚧️
        </p>
      </Section>
      <Section title="Play">
        <p>
          I&apos;ve been a longtime dabbler in electronics, graphics technologies, and game development. You can find much more on my <a href="https://github.com/hypothete" target="_blank">GitHub</a>.
          Here are a few random projects:
        </p>
        <GalleryGrid items={playGrid} />
      </Section>
      <Section title="Contact Me">
        <p>
          If you want to hire me, have me write for your publication, or just be
          friends, please reach out!
        </p>
        <ul className={styles["inline-list"]}>
          <li>
            <a
              href="mailto:erin@hypothete.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email me"
            >
              <EmailIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hypothete"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my GitHub"
            >
              <GithubIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hypothete/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my LinkedIn"
            >
              <LinkedInIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/erinholographic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my Instagram"
            >
              <InstagramIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/erinholographic.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my Bluesky"
            >
              <BlueskyIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Hypothete/videos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to my Youtube channel"
            >
              <YoutubeIcon className={styles["social-icon"]} />
            </a>
          </li>
        </ul>
      </Section>
    </Layout>
  );
}
