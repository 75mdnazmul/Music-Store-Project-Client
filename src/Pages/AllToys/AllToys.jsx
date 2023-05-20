import { Table } from "react-bootstrap";
import { useContext} from "react";
import { Link, useLoaderData } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";

const AllToys = () => {
    const musicToys = useLoaderData()
    const { user } = useContext(AuthContext)
    
    // Cheack Logged In when click view details button
    const handleCheackLoggedIn = () => {
        if (!user) {
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
        <div className="container py-5 text-center">
            <h2 className="text-center pb-4">AllToys</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details Info</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        musicToys.map(musicToy =>
                            <tr key={musicToy._id} className="align-middle">
                                <td>{musicToy.sellerName}</td>
                                <td>{musicToy.subCategory}</td>
                                <td>{musicToy.price}</td>
                                <td>{musicToy.availableQuantity}</td>
                                <td>
                                    <Link to={`/musicToy/${musicToy._id}`}>
                                        <button onClick={handleCheackLoggedIn} className='px-3 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} title="You can see the details if you are logged in">View Details</button>
                                    </Link>
                                    <ToastContainer />
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div >
    );
};

export default AllToys;