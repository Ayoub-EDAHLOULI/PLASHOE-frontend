import AboutUs from "../components/About Us/AboutUs";
import Categories from "../components/Categories/Categories";
import Companies from "../components/Companies/Companies";
import Hero from "../components/Hero/Hero";
import InfiniteText from "../components/InfiniteText/InfiniteText";

export const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <AboutUs />
      <InfiniteText />
      <Categories />
    </>
  );
};
