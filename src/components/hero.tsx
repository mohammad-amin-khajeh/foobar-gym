import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] bg-hero bg-center bg-no-repeat bg-cover"
      id="home"
    >
      <div className="container mx-auto pt-32">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
