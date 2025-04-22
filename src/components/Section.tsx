import { PropsWithChildren } from "react";
import styles from "@/styles/Section.module.css";

interface SectionProps {
  title: string;
}

const Section = (props: PropsWithChildren<SectionProps>) => {
  return (
    <section className={styles.section} id={props.title.replaceAll(/\s/g,'-')}>
      <h2 className={styles.section__header}>{props.title}</h2>
      <div className={styles.section__content}>{props.children}</div>
    </section>
  );
};

export default Section;
