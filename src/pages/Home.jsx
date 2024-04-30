import Banner from "../components/Banner";
import CardItem from "../components/CardItem";
import Feedback from "../components/Feedback";
import Type from "../components/Type";
import WhyUs from "../components/WhyUs";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner />
            <Type />
            <CardItem />
            <WhyUs />
            <Feedback />
        </div>
    );
};

export default Home;