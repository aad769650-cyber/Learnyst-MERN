
import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import SliderSection from "./SliderSection";
import Features from "./Features";
import WhyChoose from "./WhyChoose";
import Pricing from "./Pricing";
import BookDemo from "./BookDemo";
import LearnystFAQ from "./FAQS";
  const Home=()=> {


 return (













  <section className="bg-[#131D38]">
  
{/* <TypeWritter></TypeWritter> */}
 

<HeroSection></HeroSection>



<SliderSection></SliderSection>


{/* Slider */}

<Features></Features>
   
    
<WhyChoose></WhyChoose>

<Pricing></Pricing>

<BookDemo></BookDemo>

<LearnystFAQ></LearnystFAQ>
    </section>


 );
}


export default Home
