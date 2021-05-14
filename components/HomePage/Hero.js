import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An image showing Stefan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Stefan</h1>
      <p>
        I blog about Web Develoment - especially about React for frontend and
        Node for backend.
      </p>
    </section>
  );
};

export default Hero;
