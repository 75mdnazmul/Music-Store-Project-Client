import { useContext, useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../Providers/AuthProviders";
import useTitleName from "../../../Hooks/useTitleName";


const ShopByCategory = () => {
    useTitleName('Shop By Category page')

    const { user } = useContext(AuthContext)
    const [tabIndex, setTabIndex] = useState(0);
    const [musicCategorys, setMusicCategorys] = useState([])

    useEffect(() => {
        fetch('https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/shopByCategory')
            .then(res => res.json())
            .then(data => setMusicCategorys(data))
    }, [])
    const musicItem1 = musicCategorys.filter(item => item.id === 1 || item.id === 2);
    const musicItem2 = musicCategorys.filter(item => item.id === 3 || item.id === 4);
    const musicItem3 = musicCategorys.filter(item => item.id === 5 || item.id === 6);
    // Cheack Logged In when click view details button
    const handleCheackLoggedIn = () => {
        if(!user){
            toast.warn('ou have to log in first to view details.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    return (
        <div className="container text-center">
            <h2 className="pb-5" data-aos="fade-down-left" data-aos-duration="1000">Shop by category</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} data-aos="zoom-in" data-aos-duration="2000">
                <TabList>
                    <Tab>Percussion Music Toy</Tab>
                    <Tab>Electronic Music Toy</Tab>
                    <Tab>Old Music Toy</Tab>
                </TabList>
                {/* Percussion Toy */}
                <TabPanel>
                    {
                        musicItem1.map(musicItem =>
                            <div key={musicItem.id}>
                                <CardGroup>
                                    <Card className="col-lg-6">
                                        <Card.Img variant="top" style={{ width: "500px", height: "300px", margin: "auto" }} src={musicItem.picture} />
                                        <Card.Body>
                                            <Card.Title className="fs-3">Name : {musicItem.musicToyName}</Card.Title>
                                            <Card.Text>
                                                <p className="fw-bold">Price : {musicItem.price}$</p>
                                                <p className="fw-bold">Rating : {musicItem.rating}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <Link to={`singleToyDetails/${musicItem.id}`}>
                                            <button onClick={handleCheackLoggedIn} className='px-3 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} title="You can see the details if you are logged in">View Details</button>
                                        </Link>
                                    </Card>
                                </CardGroup>
                                <ToastContainer />
                            </div>
                        )
                    }
                </TabPanel>
                {/* Electronic Music Toy */}
                <TabPanel>{
                    musicItem2.map(musicItem =>
                        <div key={musicItem.id}>
                            <CardGroup>
                                <Card className="col-lg-6">
                                    <Card.Img variant="top" style={{ width: "500px", height: "300px", margin: "auto" }} src={musicItem.picture} />
                                    <Card.Body>
                                        <Card.Title className="fs-3">Name : {musicItem.musicToyName}</Card.Title>
                                        <Card.Text>
                                            <p className="fw-bold">Price : {musicItem.price}$</p>
                                            <p className="fw-bold">Rating : {musicItem.rating}</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to={`singleToyDetails/${musicItem.id}`}>
                                        <button onClick={handleCheackLoggedIn} className='px-3 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} title="You can see the details if you are logged in">View Details</button>
                                    </Link>
                                </Card>
                            </CardGroup>
                            <ToastContainer />
                        </div>
                    )
                }</TabPanel>
                {/* Old Music Toy */}
                <TabPanel>{
                    musicItem3.map(musicItem =>
                        <div key={musicItem.id}>
                            <CardGroup>
                                <Card className="col-lg-6">
                                    <Card.Img variant="top" style={{ width: "500px", height: "300px", margin: "auto" }} src={musicItem.picture} />
                                    <Card.Body>
                                        <Card.Title className="fs-3">Name : {musicItem.musicToyName}</Card.Title>
                                        <Card.Text>
                                            <p className="fw-bold">Price : {musicItem.price}$</p>
                                            <p className="fw-bold">Rating : {musicItem.rating}</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Link to={`singleToyDetails/${musicItem.id}`}>
                                        <button onClick={handleCheackLoggedIn} className='px-3 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} title="You can see the details if you are logged in">View Details</button>
                                    </Link>
                                </Card>
                            </CardGroup>
                            <ToastContainer />
                        </div>
                    )
                }</TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;