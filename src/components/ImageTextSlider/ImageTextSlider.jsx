import "./ImageTextSlider.scss";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import ImageTextSliderOne from "../../assets/ImageTextSliderOne.jpg";
import ImageTextSliderTwo from "../../assets/ImageTextSliderTwo.jpg";
import ImageTextSliderThree from "../../assets/ImageTextSliderThree.jpg";

const data = [
  {
    image: ImageTextSliderOne,
    title: " Invest in the next ",
    text: "At PLASHOE's, we are proud to invest in the next generation of innovators and dreamers. Footwear is an essential part of every individual’s journey. Our diverse range of shoes provides unparalleled comfort and style, supporting students in every step they take. Whether they are pursuing sports, arts, or academics, our shoes inspire confidence and passion, fostering a creativity and determination that can be applied in any path they choose to follow.",
  },
  {
    image: ImageTextSliderTwo,
    title: "Partnership with famous companies",
    text: "At PLASHOE's, we are proud to partner with renowned brands like Adidas, Nike, and Jordan. These collaborations allow us to offer our customers exclusive access to the latest and most sought-after designs in the sneaker world. By working closely with these iconic companies, we ensure that our inventory is always at the cutting edge of fashion and technology. This partnership not only enhances the quality and variety of our offerings but also reinforces our commitment to providing our customers with the best products available. Together with these industry leaders, we are dedicated to fostering a community of sneaker enthusiasts who appreciate the perfect blend of style, comfort, and performance.",
  },
  {
    image: ImageTextSliderThree,
    title: " Shoes Passion",
    text: "At PLASHOE's, our passion for shoes goes beyond mere fashion. We believe that every pair of shoes tells a story and has the power to transform the way you feel and move. This passion drives us to curate a diverse collection that celebrates innovation, craftsmanship, and timeless design. Whether you're a dedicated athlete, a style enthusiast, or someone who values comfort and quality, our store is dedicated to helping you find the perfect pair. Our commitment to shoes is a commitment to you, ensuring that each step you take is filled with confidence, comfort, and a touch of elegance.",
  },
];

const ImageTextSlider = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleNext = () => {
    setFlip((prev) => !prev);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
      setFlip((prev) => !prev);
    }, 50); // Match this duration with the animation duration
  };

  const handlePrev = () => {
    setFlip((prev) => !prev);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setFlip((prev) => !prev);
    }, 50); // Match this duration with the animation duration
  };

  return (
    <div className="image-text-slider">
      <div className="images">
        <animated.div
          className="image-card"
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          <img src={data[index].image} alt={`Image ${index + 1}`} />
        </animated.div>
        <animated.div
          className="image-card"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
          }}
        >
          <img
            src={data[(index + 1) % data.length].image}
            alt={`Image ${((index + 1) % data.length) + 1}`}
          />
        </animated.div>
      </div>
      <div className="text">
        <h2>{data[index].title}</h2>
        <p>{data[index].text}</p>
        <div className="navigation">
          <button onClick={handlePrev} className="nav-button">
            ❮
          </button>
          <button onClick={handleNext} className="nav-button">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSlider;
