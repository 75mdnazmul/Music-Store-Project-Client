import img1 from "../../../assets/customer1.webp"
import img2 from "../../../assets/customer2.webp"

const CustomerSaying = () => {
    return (
        <div className=" container text-center my-5">
            <div className="py-5 " data-aos="fade-down-left" data-aos-duration="1000">
                <h2>Customer Saying</h2>
            </div>
            <div className="d-flex gap-3">
                <div className="border border-2 w-50 p-5 rounded-3" data-aos="zoom-in-down" data-aos-duration="1000">
                    <div className="d-flex gap-5">
                        <img className=" d-flex w-25 rounded-circle" src={img1} alt="" />
                        <div>
                            <h3>Jassica nina</h3>
                            <p>I appreciate the focus on sustainable and eco-friendly toys at this shop. It is so important for our kids future.</p>
                        </div>
                    </div>
                </div>
                <div className="border border-2 w-50 p-5 rounded-3"  data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="d-flex gap-5">
                        <img className=" d-flex w-25 rounded-circle" src={img2} alt="" />
                        <div>
                            <h3>Jassica nina</h3>
                            <p>The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSaying;