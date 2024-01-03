import "./index.css";
import Footer from "./assets/components/Footer";
import First from "./assets/components/First";
import Navbar from "./assets/components/Navbar";
import Titl from "./assets/components/Titl";
import Card from "./assets/components/Card";
import Text2 from "./assets/components/Text2";
import Princing from "./assets/components/Princing";
import CardsNews from "./assets/components/CardsNews";
import log1 from "./assets/icons/logos/log1.png"
import log2 from "./assets/icons/logos/log2.png"
import log3 from "./assets/icons/logos/log3.png"
import icon1 from "./assets/icons/logos/icon1.webp"
import icon2 from "./assets/icons/logos/icon2.webp"
import icon3 from "./assets/icons/logos/icon3.webp"

function App() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Navbar />
        <First />
      </main>
      <section className="flex flex-col justify-center items-center mt-[300px]">
        <Titl />
        <div className="flex flex-wrap justify-center lg:w-[960px] gap-2.5">
          <Card log={log1} title="Create command"description="Enables users to locate solutions to their inquiries without browsing numerous resources."/>
          <Card log={log2} title="Improve everyday"description="The app uses natural language processing to understand user queries and provide accurate and relevant responses."/>
          <Card log={log3} title="Connect everywhere"description="Connect with the AI tool from anywhere, on any device, making it more accessible and convenient."/>
          <Card log={log2} title="Create command"description="Enables users to locate solutions to their inquiries without browsing numerous resources."/>
          <Card log={log3} title="Improve everyday"description="The app uses natural language processing to understand user queries and provide accurate and relevant responses."/>
          <Card log={log1} title="Connect everywhere"description="Connect with the AI tool from anywhere, on any device, making it more accessible and convenient."/>

          
         
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className=" lg:flex  w-[350px] md:h-[812px] lg:h-[432px] md:w-[730px] lg:w-[1000px] ">
          <div className="w-[350px] h-[365px] md:w-[730px] md:h-[365px] lg:w-[325px] lg:h-[432px] mr-10 rounded-2xl bg-hero-pattern bg-center"></div>
          <div className=" flex flex-col justify-between">
            <h3 className="text-[28px] text-center md:text-left my-[40px] md:my-[0px] md:text-[48px] font-bold">
              Delig user experience
            </h3>
            <Text2 icon={icon1} title="Premium Acces" description="Enable both crypto and fiat payments on your self-hosted checkout page."/>
            <Text2 icon={icon2} title="Professional" description="Enable both crypto and fiat payments on your self-hosted checkout page."/>
            <Text2 icon={icon3} title="Grow Trend" description="Enable both crypto and fiat payments on your self-hosted checkout page."/>
            
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className=" lg:flex  w-[350px] md:h-[812px] lg:h-[432px] md:w-[730px] lg:w-[1000px] flex-row-reverse">
          <div className="w-[350px] h-[365px] md:w-[730px] md:h-[365px] lg:w-[325px] lg:h-[432px] mr-10 rounded-2xl bg-second-pattern bg-center"></div>
          <div className=" flex flex-col justify-between">
            <h3 className="text-[28px] text-center md:text-left my-[40px] md:my-[0px] md:text-[48px] font-bold">
              Delig user experience
            </h3>
            <Text2 icon={icon1} title="Premium Acces" description="Enable both crypto and fiat payments on your self-hosted checkout page."/>
            <Text2 icon={icon2} title="Professional" description="Enable both crypto and fiat payments on your self-hosted checkout page."/>
            <Text2 icon={icon3} title="Grow Trend" description="Enable both crypto and fiat payments on your self-hosted checkout page."/>
            
          </div>
        </div>
      </section>
      <section  className="flex flex-col justify-center items-center">
        <Titl />
        <div className="flex flex-col flex-wrap gap-3  md:h-[449px]" id="price">
          <Princing  type="Regular" price="9" men="Access All Products" men2="Access Future Products" men3="Access to VIP Products" men4="Acces Basic Data"/>
          <Princing  type="Regular" price="99" men="Access All Products" men2="Access Future Products" men3="Access to VIP Products" men4="Acces Basic Data"/>
          <Princing  type="Regular" price="999" men="Access All Products" men2="Access Future Products" men3="Access to VIP Products" men4="Acces Basic Data"/>
        </div>
      </section>
      <section  className="flex flex-col justify-center items-center mb-[100px]">
        <Titl />
        <div className="flex justify-center gap-4 flex-wrap">
        <CardsNews/>
        <CardsNews/>
        <CardsNews inv="hidden lg:flex"/>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
