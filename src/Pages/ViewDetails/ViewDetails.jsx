import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const viewDetails = useLoaderData()
    console.log(viewDetails);
    const {name, photo, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description} = viewDetails;
    return (
        <>
            <h2 className="container mt-5 text-center fw-bold">{name}</h2>
            <div className="card mb-3 container my-5 p-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={photo} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><span className="fw-bold">Toy Name : </span>{name}</h5>
                            <p className="card-text"><span className="fw-bold">Detail Description : </span>{description}</p>
                            <p className="card-text"><span className="fw-bold">Seller Name : </span> {sellerName}</p>
                            <p className="card-text"><span className="fw-bold">Seller Email : </span>{sellerEmail}</p>
                            <p className="card-text"><span className="fw-bold">Sub-Category : </span>{subCategory}</p>
                            <p className="card-text"><span className="fw-bold">Price : </span>{price}$</p>
                            <p className="card-text"><span className="fw-bold">Rating: </span>{rating}</p>
                            <p className="card-text"><span className="fw-bold">Available Quantity : </span>{availableQuantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ViewDetails;