import Banner from "../components/Banner";
import CardItem from "../components/CardItem";
import Type from "../components/Type";
import WhyUs from "../components/WhyUs";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Banner />
            <Type />
            <CardItem />
            <WhyUs />
        </div>
    );
};

export default Home;