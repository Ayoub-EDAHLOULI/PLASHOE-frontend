import "./About.scss";
import Shoes_Video from "../../assets/Shoes_Video.mp4";
import Shoes_Png from "../../assets/shoes.png";
import ImageTextSlider from "../../components/ImageTextSlider/ImageTextSlider";
import InfinityText from "../../components/InfiniteText/InfiniteText";
import Shipping from "../../components/Shipping/Shipping";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        {/* Hero Section */}
        <div className="about_hero">
          <div className="about_hero__content">
            <h6 className="about_hero__title">About Us</h6>
            <div className="about_hero__text">
              <h1>Master & </h1>
              <h1> Dynamic’s Story </h1>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about__info">
          <div className="about__content">
            <div className="logo">
              <h2>PLASHOE</h2>
            </div>
            <p>
              PLASHOE is a global online shopping destination for
              fashion-forward people. We offer a wide range of trendy and
              stylish products. Our mission is to provide customers with the
              best quality products at an affordable price. PLASHOE s store isnt
              just about selling shoes; It is about sharing stories and creating
              a personalized shopping experience. With our commitment to quality
              and customer satisfaction, our store has quickly become a favorite
              destination for those who share love for sneakers. PLASHOE s goal
              is to build a legacy of great sneakers and even greater customer
              service.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="about__video">
          <div className="about__video__container">
            <video autoPlay loop muted>
              <source src={Shoes_Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="about__video__content">
              <div className="about__video__content__container">
                <img src={Shoes_Png} alt="Shoes" />
                <h2>The allure of shoes</h2>
                <p>
                  Shoes are more than just a piece of clothing; they are a form
                  of self-expression. They can tell a story, evoke emotions, and
                  inspire creativity. At PLASHOE, we believe that shoes are more
                  than just a fashion statement; they are a way of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product DNA Section */}
        <div className="about__dna">
          <div className="about__dna__container">
            <h1>Our Product DNA</h1>
            <div className="about__dna__content">
              <div className="about__dna__content__item">
                <div className="image"></div>
                <h2>Quality</h2>
                <p>
                  Our products are made with the highest quality materials to
                  ensure durability and comfort.
                </p>
              </div>
              <div className="about__dna__content__item">
                <div className="imageTwo"></div>
                <h2> Comfort</h2>
                <p>
                  We offer a wide range of trendy and stylish products that are
                  perfect for any occasion.
                </p>
              </div>
              <div className="about__dna__content__item">
                <div className="imageThree"></div>
                <h2>Style</h2>
                <p>
                  Our shoes are designed with comfort in mind, so you can look
                  good and feel good all day long.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="about__ceo">
          <div className="about__ceo__container">
            <q>
              Designed to be modern yet timeless, our shoes utilize only the
              finest materials and are crafted to last, creating the perfect
              balance of aesthetics, durability, comfort, and exceptional
              performance.
            </q>
            <h5>Ayoub Edahlouli __ Founder and CEO</h5>
          </div>
        </div>

        {/* ImageTextSlider Section */}
        <ImageTextSlider />

        {/* Infinity Text Section */}
        <InfinityText text="Our History" />

        {/* Newsletter Section */}
        <div className="about__newsletter">
          <div className="about__newsletter__container">
            <div className="Image"></div>
            <div className="about__newsletter__content">
              <h1>@</h1>
              <h1>Subscribe to our newsletter</h1>
              <p>
                Sign up for our newsletter to receive updates on new arrivals,
                special offers, and other discount information.
              </p>
              <div className="about__newsletter__form">
                <input type="email" placeholder="E-mail" />
                <button>Subscribe</button>
                <h6>
                  By completing this form you are signing up to receive our
                  emails and can unsubscribe at any time.
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Section */}
        <Shipping />
      </div>
    </div>
  );
}

export default About;
