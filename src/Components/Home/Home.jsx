import HomeHeader from "./HomeHeader";
import ChoseUs from "./ChoseUs";
import CoreValues from "./CoreValues";
import MissionVision from "./Mission";
import AboutUs from "./AboutUs";
import Testimonials from "../RepeatedComponent/Testimonials";
import Team from "../RepeatedComponent/Team";

export default function Home() {

    return (
        <>
            <HomeHeader />
            <AboutUs />
            <ChoseUs />
            <MissionVision />
            <CoreValues />
            <Team />
            <Testimonials />
        </>
    )
}
