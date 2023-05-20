import Banner from "../Banner/Banner";
import CustomerSaying from "../CustomerSaying/CustomerSaying";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerSaying></CustomerSaying>
        </div>
    );
};

export default Home;