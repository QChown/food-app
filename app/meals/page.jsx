import Link from "next/link";
import React from "react";
import classes from "./page.module.css";

function page() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. Don&apos;t think
          just cook
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
}

export default page;
