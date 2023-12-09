import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <Link href='/meals/meal-1'>Meal 1</Link>
      <Link href='/meals/meal-2'>Meal 2</Link>
    </div>
  );
}

export default page;
