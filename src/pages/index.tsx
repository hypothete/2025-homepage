import styles from "@/styles/Home.module.css";

import Layout from "@/components/Layout";
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

export default function Home() {
  return (
    <Layout>
      <div className={styles["above-fold"]}>
        <img
          className={styles["above-fold__headshot"]}
          src="images/elephants-3-yrs.jpg"
          alt="A photo of Erin Alexander"
        />
        <div className={styles["above-fold__text"]}>
          <h1>Erin Alexander</h1>
          <p>
            Hi, I&apos;m Erin! I&apos;m a software engineer, writer, and visual
            artist from Portland, Oregon. Whether I&apos;m building something at
            a startup or making art for myself, my work tends to be
            cross-disciplinary and driven by systems thinking. I&apos;m drawn to
            explore what science fiction author Rudy Rucker terms{" "}
            <i>the gnarl</i>—the zone of complexity between order and chaos,
            where interesting things happen.
          </p>
        </div>
      </div>
      <Section title="Career">
        <p>
          I&apos;ve worked since 2013 mostly in frontend developer roles at
          small businesses and startups. I&apos;ve been responsible for complex
          visualizations, system and cloud architecture, project management, and
          team leadership. Currently I&apos;m seeking new directions in my
          career, because I love breadth and a holistic understanding of how
          teams and businesses work.
        </p>
        <h3>An unordered list of my skills</h3>
        <pre>
          React | TypeScript | Next.js | AWS CDK | GitHub Actions | Google Cloud
          Platform | Mentorship | Developer Experience | Cross-functional
          Collaboration | Agile/Scrum Facilitation | Roadmap Development | WebGL
          | Three.js | WebGPU | Canvas | SVG | D3.js | Recharts | Redux |
          TanStack Query | Webpack | Babel | Storybook | Vite | GraphQL |
          Technical Discovery | A/B Testing
        </pre>
        <h3 id="resume">Résumé - Choose your path!</h3>
        <div className={styles["resume-grid"]}>
          <div className={styles["resume-grid__item"]}>
            <a
              href="resumes/Erin Alexander-engineering.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EngineeringIcon className={styles["resume-icon"]} />
              <h4>Engineering</h4>
            </a>
          </div>
          <div className={styles["resume-grid__item"]}>
            <a
              href="resumes/Erin Alexander-management.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ManagementIcon className={styles["resume-icon"]} />
              <h4>Management</h4>
            </a>
          </div>
          <div className={styles["resume-grid__item"]}>
            <a
              href="resumes/Erin Alexander-product.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProductIcon className={styles["resume-icon"]} />
              <h4>Product</h4>
            </a>
          </div>
          <div className={styles["resume-grid__item"]}>
            <a
              href="resumes/Erin Alexander-graphics.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraphicsIcon className={styles["resume-icon"]} />
              <h4>Graphics</h4>
            </a>
          </div>
        </div>
      </Section>
      <Section title="Art">
        <p>
          I graduated from college in 2009 with a degree in art and art history.
          After school I was deeply involved in the Net Art scene and the art
          collective dump.fm, exhibiting work and rubbing shoulders with new
          media artists and GIF-makers. I started to find myself more drawn to
          the web itself as a medium, and translated my skills into an
          engineering career.
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
          I came out as transgender in 2022, and since then I&apos;ve been
          writing essays on my blog{" "}
          <a
            href="https://humankibble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human Kibble
          </a>{" "}
          about my experiences in transition. I write to engage with the
          (excessive amount of) queer theory, history, literature and media I
          devour in order to better understand myself and what it means to be
          trans.
        </p>
        <h3>Some favorites</h3>
        <ul>
          <li>
            <a
              href="https://humankibble.com/posts/common-ally-slurs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Common Ally Slurs
            </a>
            —when truisms hurt, and what to say instead
          </li>
          <li>
            <a
              href="https://humankibble.com/posts/visibility-tanking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visibility Tanking
            </a>
            —a strategy for taking space
          </li>
          <li>
            <a
              href="https://humankibble.com/posts/my-dolls/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Dolls
            </a>
            —a machinima essay on reclaiming my past
          </li>
          <li>
            <a
              href="https://humankibble.com/posts/epe-baby/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              href="mailto:erin@hypothete.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hypothete"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hypothete/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/erinholographic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={styles["social-icon"]} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Hypothete/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className={styles["social-icon"]} />
            </a>
          </li>
        </ul>
      </Section>
    </Layout>
  );
}
