import HeroImage from "../assets/hero-img.png";

export const HeroSection = () => {
  return (
    <>
      <h1 className="text-[64px] font-serif font-semibold mt-6">
        The Pioneering Wheels: A Journey Through Cars of the 1900s
      </h1>
      <div className="flex mt-8 justify-between">
        <div className="flex flex-col justify-between">
          <p className="font-serif text-2xl font-medium">
            The turn of the 20th century marked a revolutionary period <br /> in
            the history of transportation, as the horse-drawn <br /> carriages
            were gradually being replaced by a novel <br /> invention – the
            automobile.
          </p>
          <div>
            <h4 className="text-4xl font-serif font-semibold mb-8">
              The Birth of an Era
            </h4>
            <p className="text-2xl leading-9 font-normal font-sans text-gray-600">
              The late 1800s and early 1900s saw the birth of the <br />{" "}
              automotive industry, with inventors and innovators <br />{" "}
              experimenting with different designs and propulsion systems.{" "}
              <br /> One of the earliest and most iconic pioneers was Karl Benz,{" "}
              <br /> who is credited with creating the first true automobile. In{" "}
              <br /> 1886, Benz introduced the Benz Patent-Motorwagen, a <br />{" "}
              three-wheeled vehicle powered by an internal combustion <br />{" "}
              engine fueled by gasoline. Reflecting on his groundbreaking <br />{" "}
              invention, Benz stated, "I do not dream at night, I dream all{" "}
              <br /> day; I dream for a living."
            </p>
            <br />
            <p className="text-2xl leading-9 font-normal font-sans text-gray-600">
              As the years progressed, other visionaries such as Henry Ford{" "}
              <br /> and the Dodge brothers joined the automotive revolution,{" "}
              <br /> each contributing to the evolution of the automobile. Ford,{" "}
              <br /> known for revolutionizing the production process with{" "}
              <br /> assembly line techniques, remarked, "Coming together is a{" "}
              <br /> beginning; keeping together is progress; working together
              is <br /> success.
            </p>
          </div>
        </div>
        <img src={HeroImage} alt="" />
      </div>
    </>
  );
};
