import Accordion from 'react-bootstrap/Accordion';
import img from '../../../assets/faq.webp'

const FAQ = () => {
    return (
        <div className='container'>
            <div className="pt-5 text-center" data-aos="fade-down-right" data-aos-duration="1000">
                <h2>Frequently Asked Questions</h2>
                <p style={{ color: '#04B4AE', padding: "10px 0 0" }}>Find your answer from here</p>
            </div>
            <div className='row'>
                < img src={img} alt="" className='w-50 col-sm-12 col-lg-6' data-aos="fade-right" 
                    data-aos-duration="1000" />
                <div className='w-50 mt-5 col-sm-12  col-lg-6' data-aos="fade-left"
                    data-aos-duration="1000">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is the age range of toys available in the store ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                The age range of toys available in the store is 1 year
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Do you offer a warranty or return policy for your products ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                Yes, We offer a warranty or return policy for our products.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I order toys online or do I need to visit the store ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                Yes, you can order toys online or purchase directly from the store.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> Do I need to pick them up in Store or delivered at home ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                You can also order from the store or order on our website and take the product home.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header> Are your toys environmentally friendly and sustainable ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                Yex, Our toys are eco-friendly and durable,
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What is range of toys do you have in your Store ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                Our store has a range of thousands of toys.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;