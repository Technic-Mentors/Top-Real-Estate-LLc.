import Testimonials from "../RepeatedComponent/Testimonials";
import AboutUsSection from "./AboutUsSection";
import MissionVision from "./MissionVision";
import Services from "./Services";

export default function About() {
    return (
        <>
            <AboutUsSection />
            <MissionVision />
            <Services />
            <Testimonials />
        </>
    )
}
