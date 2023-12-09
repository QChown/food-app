import React from "react";

function page({ params }) {
  return <div>single meal{params.id}</div>;
}

export default page;
