import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const UpdateMyToys = () => {
    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const newToy = { price, availableQuantity, description }

        console.log(newToy);

        // Send data to the server
        fetch('https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/myToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Music Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (
        <div className="container">
            <h2 className="text-center pt-5">Add A Toy</h2>
            <form onSubmit={handleAddToy} className="mt-4 py-5 border border-2 rounded-4 ">
                <div className="d-flex ">
                    <div>
                        <div className="py-2 ps-5">
                            <label className="fw-bold pe-3" htmlFor="price">Price:</label>
                            <input
                                className="px-3 py-2 rounded "
                                placeholder="Add Toy Price"
                                type="text"
                                id="price"
                                name="price"
                                required
                            />
                        </div>
                        <div className="py-2 ps-5">
                            <label className="fw-bold pe-3" htmlFor="availableQuantity">Available Quantity:</label>
                            <input
                                className="px-3 py-2 rounded "
                                placeholder="Add Toy Available Quantity"
                                type="number"
                                id="availableQuantity"
                                name="availableQuantity"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="py-2 mt-4 ps-5 text-center">
                    <label className="fs-5 fw-bold pb-2 " htmlFor="description">Detail Description:</label><br />
                    <textarea
                        className="w-75 rounded-3 m-4 p-4"
                        placeholder="Write your Toy Details and Description."
                        id="description"
                        name="description"
                        required
                    />
                </div>
                <div className="text-center">
                    <Button className='px-3 mb-2 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#04B4AE' }} variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMyToys;