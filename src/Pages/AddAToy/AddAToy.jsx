import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'

const AddAToy = () => {
    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const newToy = {name, photo, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description}

        // Send data to the server
        fetch('http://localhost:7000/musicToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
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
                            <label className="fw-bold pe-3" htmlFor="name">Toy Name:</label>
                            <input

                                className="px-3 py-2 rounded "
                                placeholder="Write your Name"
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="py-2 ps-5">
                            <label className="fw-bold pe-3" htmlFor="pictureUrl">Picture URL of the toy:</label>
                            <input
                                className="px-3 py-2 rounded "
                                placeholder="Put your Photo Url"
                                type="text"
                                id="pictureUrl"
                                name="photo"
                                required
                            />
                        </div>
                        <div className="py-2 ps-5">
                            <label className="fw-bold pe-3" htmlFor="sellerName">Seller Name (if available):</label>
                            <input
                                className="px-3 py-2 rounded "
                                placeholder="Write Seller name"
                                type="text"
                                id="sellerName"
                                name="sellerName"
                            />
                        </div>
                        <div className="py-2 ps-5">
                            <label className="fw-bold pe-3" htmlFor="sellerEmail">Seller Email (info from the logged in user):</label>
                            <input
                                className="px-3 py-2 rounded "
                                placeholder="Write Seller Email"
                                type="email"
                                id="sellerEmail"
                                name="sellerEmail"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="py-2 ps-5">
                            <label className="fw-bold pe-3" htmlFor="subCategory">Sub-category:</label>
                            <select
                                id="subCategory"
                                name="subCategory"
                                required
                            >
                                <option value="" className="px-3 py-2 rounded ">Select a sub-category</option>
                                <option value="Percussion Music Toy" className="px-3 py-2 rounded ">Percussion Music Toy</option>
                                <option value="Electronic Music Toy">Electronic Music Toy</option>
                                <option value="Old Music Toy">Old Music Toy</option>
                            </select>
                        </div>
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
                            <label className="fw-bold pe-3" htmlFor="rating">Rating:</label>
                            <input
                                className="px-3 py-2 rounded "
                                placeholder=" Add Toy Rating"
                                type="number"
                                id="rating"
                                name="rating"
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

export default AddAToy;