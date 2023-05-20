import Banner from "../Banner/Banner";
import CustomerSaying from "../CustomerSaying/CustomerSaying";
import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FAQ></FAQ>
            <CustomerSaying></CustomerSaying>
        </div>
    );
};

export default Home;