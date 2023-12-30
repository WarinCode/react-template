import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const About = ({
  imageSrc,
  imageStyle,
  header,
  content,
  componentStyle,
  caption,
}) => {
  return (
    <div className={componentStyle}>
      <div className="w-6/12">
        <figure>
          <Zoom>
            <img
                src={imageSrc}
                alt="image"
                className={`${imageStyle}`}
                loading="lazy"
                id="img-about"
              />            
          </Zoom>
          <figcaption className="text-center mt-3 text-gray-500 font-light italic cursor-pointer hover:underline text-sm">
            {caption}
          </figcaption>
        </figure>
      </div>
      <div className="w-6/12">
        <header className=" font-bold text-xl text-center mb-4">
          {header}
        </header>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default About;
