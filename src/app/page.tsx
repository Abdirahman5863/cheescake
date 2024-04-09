import React from "react";
import Home from "@/app/Component/Home";
import About from "@/app/Component/About"


const page = () => {
  return (
    <main className="overflow-hidden">
      <section>
        <Home />
      </section>
      <section>
        <About/>
      </section>

    </main>
  );
};

export default page;
