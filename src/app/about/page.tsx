import styles from "../styles/About.module.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
      </header>

      <section className={styles.content}>
        <h2>Welcome to the UI Test Task</h2>
        <p>
          This is a demonstration project built using <strong>Next.js</strong>
          and <strong>TypeScript</strong> to showcase my skills in creating
          responsive user interfaces and writing clean, maintainable CSS. The
          purpose of this application is to exhibit my ability to implement
          modern web development techniques and design patterns.
        </p>
        <p>
          The app is focused on providing a seamless user experience while
          adhering to best practices in UI design. Whether its managing
          layouts, transitions, or mobile responsiveness, this project reflects
          my approach to developing intuitive web applications.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Technical Overview</h2>
        <ul>
          <li>
            Built with <strong>Next.js</strong> and <strong>TypeScript</strong>
          </li>
          <li>
            Responsive design using <strong>CSS</strong> with modern techniques
          </li>
          <li>
            Utilizes <strong>React</strong> for interactive UI components
          </li>
          <li>Seamless navigation and page transitions</li>
          <li>Optimized for performance and accessibility</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <h2>Contact</h2>
        <p>
          For any inquiries or feedback, feel free to reach out via the contact
          page or email me at{" "}
          <a href="mailto:info@website.com">info@website.com</a>.
        </p>
      </footer>
    </div>
  );
};

export default About;
