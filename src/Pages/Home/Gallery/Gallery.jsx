import { Card, CardGroup } from "react-bootstrap";
import image1 from "../../../assets/gallery/gallery1.webp"
import image2 from "../../../assets/gallery/gallery2.webp"
import image3 from "../../../assets/gallery/gallery3.webp"
import image4 from "../../../assets/gallery/gallery4.webp"
import image5 from "../../../assets/gallery/gallery5.webp"
import image6 from "../../../assets/gallery/gallery6.webp"


const Gallery = () => {
    return (
        <div className="py-5 my-5 text-center container">
            <h2 className="pb-5" data-aos="fade-down-right" data-aos-duration="1000">Music Gallery</h2>
            <CardGroup className="row gap-4 my-4">
                <Card className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-left" data-aos-duration="1000">
                    <Card.Img variant="top" src={image1} />
                </Card>
                <Card className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-left" data-aos-duration="1000">
                    <Card.Img variant="top" src={image2} />
                </Card>
                <Card className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-left" data-aos-duration="1000">
                    <Card.Img variant="top" src={image3} />
                </Card>
            </CardGroup>
            <CardGroup className="row  gap-2">
                <Card className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-right" data-aos-duration="1000">
                    <Card.Img variant="top" src={image4} />
                </Card>
                <Card className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-right" data-aos-duration="1000">
                    <Card.Img variant="top" src={image5} />
                </Card>
                <Card className="col-sm-12 col-md-6 col-lg-4" data-aos="flip-right" data-aos-duration="1000">
                    <Card.Img variant="top" src={image6} />
                </Card>
            </CardGroup>
        </div>

    );
};

export default Gallery;