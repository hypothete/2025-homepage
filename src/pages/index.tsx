import Head from "next/head";
import styles from "@/styles/Home.module.css";
import "photoswipe/dist/photoswipe.css";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";

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
        <h1>Erin Alexander</h1>
        <p>Hi I'm e r i n blah blah blah</p>
        <code>test to see if Fira Code is rendering</code>
        <Section title="Career">
          <p>Blurb about the roles I've had</p>
          <h3>Skills I have in no particular order</h3>
          <ul>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
          </ul>
          <h3>Resume - Choose your path!</h3>
          <ul>
            <li>Engineering</li>
            <li>Management</li>
            <li>Product</li>
            <li>Graphics</li>
          </ul>
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
            I came out as trans in 2022, and since then I've been writing essays
            about my experiences in transition. I use my writing as a way to
            engage with queer theory, history, and media in order to better
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
          <ul>
            <li>Email</li>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </Section>
      </main>
      <footer className={styles.footer}>
        Copyright 2009-25. All rights reserved 😘
      </footer>
    </>
  );
}
