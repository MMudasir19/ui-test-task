import { useState } from "react";
import Link from "next/link"; // For navigation
import styles from "../styles/Navbar.module.css"; // Import CSS file
import Image from "next/image";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState); // Toggle drawer open/close
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Left container with the logo and nav links */}
        <div className={styles.navbarLeft}>
          <h1>
            <Link href="/" passHref>
              UI Test Task
            </Link>
          </h1>
          <div className={styles.navbarLinks}>
            <Link href="/" className={styles.a}>
              <i className="fas fa-home"></i>
              Home
            </Link>
            <Link href="/about" className={styles.a}>
              <i className="fas fa-info-circle"></i>
              About Us
            </Link>
            <Link href="/contact" className={styles.a}>
              <i className="fas fa-phone"></i>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.navbarAvatarDiv}>
          {/* Right container with the avatar */}
          <div className={styles.navbarAvatar}>
            <Image src="/vercel.svg" alt="User Avatar" />
          </div>
          {/* Menu Icon */}
          <div
            className={styles.navbarMenuIcon}
            onClick={toggleDrawer}
            role="button"
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Drawer - conditional rendering based on isDrawerOpen */}
      <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
        <div
          className={styles.drawerCloseIcon}
          onClick={toggleDrawer}
          role="button"
          aria-label="Close navigation menu"
        >
          <i className="fas fa-times"></i> {/* Close icon */}
        </div>
        <hr />
        <ul className={styles.drawerLinks}>
          <li>
            <Link href="/" className={styles.a}>
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.a}>
              <i className="fas fa-info-circle"></i>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.a}>
              <i className="fas fa-phone"></i>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
