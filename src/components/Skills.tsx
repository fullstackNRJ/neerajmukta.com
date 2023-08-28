import React from "react";

const Skills = () => {
  return (
    <div className="bg-slate-300 grid">
      <section className="flex flex-col gap-2">
        <label>Languages I code in but not limited to</label>
        js, ts, python, java
      </section>
      <section className="flex flex-col gap-2">
        <label>Frameworks I have work with</label>
        Angular, Nextjs, Sveltejs, Expressjs, Fastify, React-Native, Springboot
      </section>
      <section className="flex flex-col gap-2">
        <label>Stacks I have experience in</label>
        MEAN, MERN, React-springboot, Angular-springboot
      </section>
      <section className="flex flex-col gap-2">
        <label>Databases I prefer</label>
        Postgres, Mongo, Couchbase, redis,
      </section>
      <section className="flex flex-col gap-2">
        <label>Tools & Libraries I love</label>
        Docker, K8s, AWS, GraphQL, tRPC, tailwindcss,
      </section>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">React/NextJs</label>
      </div>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">React Native</label>
      </div>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">Angular</label>
      </div>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">NodeJs</label>
      </div>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">AWS</label>
      </div>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">Webflow</label>
      </div>
      <div>
        <img id="react" src="" alt="react" />
        <label htmlFor="react">Shopify</label>
      </div>
    </div>
  );
};

export default Skills;
