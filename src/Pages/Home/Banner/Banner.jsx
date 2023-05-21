import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../../assets/banner3.jpg"
import image2 from "../../../assets/banner2.jpg"
import image3 from "../../../assets/banner1.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={90000}>
                    <img
                        className="d-block w-100"
                        style={{ height: '550px', filter:"brightness(0.7) contrast(1.2) saturate(0.8)"}}
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{marginBottom: "180px"}}>
                        <h1 style={{fontSize:'62px'}}>Music toys</h1>
                        <button style={{ color: "white", backgroundColor: "#04B4AE" }}
                        type="button" className="btn fw-bold"> Shop Now </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={50000}>
                    <img
                        className="d-block w-100"
                        style={{ height: '550px', filter:"brightness(0.6) contrast(1.2) saturate(0.8)"}}
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{marginBottom: "180px"}}>
                        <h1 style={{fontSize:'62px'}}>Music toys</h1>
                        <button style={{ color: "white", backgroundColor: "#04B4AE" }}
                        type="button" className="btn fw-bold"> Shop Now </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 bg-none"
                        style={{ height: '550px', filter:"brightness(0.7) contrast(1.2) saturate(0.8)"}}
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{marginBottom: "180px"}}>
                        <h1 style={{fontSize:'62px'}}>Music toys</h1>
                        <button style={{ color: "white", backgroundColor: "#04B4AE" }}
                        type="button" className="btn fw-bold"> Shop Now </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;