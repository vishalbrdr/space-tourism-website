import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const navLinks = [
    { name: "home", route: "/" },
    { name: "destination", route: "/destination" },
    { name: "crew", route: "/crew" },
    { name: "technology", route: "/technology" },
  ];

  return (
    <nav className={styles.navbar}>
      <figure>
        <Image
          src={"/assets/shared/logo.svg"}
          width={50}
          height={50}
          alt="logo"
        />
      </figure>
      <hr />
      <ul>
        {navLinks.map((item, i) => (
          <li key={i}>
            <Link href={item.route}>
              <a className="Nav-Text">
                <strong>0{i}</strong> {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
