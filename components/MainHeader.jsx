import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png";
import classes from "./MainHeader/MainHeader.module.css";
import Image from "next/image";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image priority src={logoImg} alt='A plate with food on it' />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
