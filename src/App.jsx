//* import Components
import {
  Navbar,
  Footer,
  Testimonial,
  Hero,
  About,
  Container,
  Heading,
  Companies,
  Service,
  Menu,
  Form,
  Location,
} from "./components/index";

//* import images
import img1 from "./assets/bg/istockphoto-1138159915-170667a.jpg";
import img2 from "./assets/bg/istockphoto-639426182-170667a.jpg";

//* import fonts
import "@fontsource/poppins";
import "@fontsource/mali";
//* import style
import "./style/style.css";
import "./style/index.css";

//* App Component
const App = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Container>
        <Heading id={"about"} text={"about"} />
        <About
          imageSrc={img1}
          imageStyle={"w-3/5 h-10/12 m-auto rounded-lg object-cover shadow-lg"}
          componentStyle={
            "flex flex-row items-center justify-center text-start font-poppins"
          }
          header={"Cupidatat esse sunt velit"}
          content={
            "Aute Lorem consectetur esse consectetur ut consequat commodo est officia aliquip cupidatat. Laboris officia sint cillum aliquip ipsum anim. Aute et aute amet qui minim elit ipsum culpa aliquip adipisicing non culpa."
          }
          caption={"Excepteur occaecat deserunt Lorem ad do."}
        />
        <About
          imageSrc={img2}
          imageStyle={"w-3/5 h-10/12 m-auto rounded-lg object-cover shadow-lg"}
          componentStyle={
            "flex flex-row-reverse items-center justify-center text-start font-poppins"
          }
          header={"Cupidatat esse sunt velit aliqua consectetur"}
          content={
            "Aute Lorem consectetur esse consectetur ut consequat commodo est officia aliquip cupidatat. Laboris officia sint cillum aliquip ipsum anim. Aute et aute amet qui minim elit ipsum culpa aliquip adipisicing non culpa."
          }
          caption={"Excepteur occaecat deserunt Lorem ad do."}
        />
      </Container>
      <Container>
        <Heading text={"companies that help and support us."} id="companies" />
        <Companies />
      </Container>
      <Container>
        <Heading text={"our services"} id={"services"} />
        <Service />
      </Container>
      <Container>
        <Heading text={"menu"} id={"menu"} />
        <Menu />
      </Container>
      <Testimonial />
      <Container>
        <Heading text={"location"} id={"location"} />
        <Location />
      </Container>
      <Container>
        <Heading text={"contact"} id={"contact"} />
        <Form />
      </Container>
      <Footer />
    </>
  );
};

export default App;
