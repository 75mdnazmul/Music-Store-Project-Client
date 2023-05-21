import { useLoaderData } from "react-router-dom";
import useTitleName from "../../Hooks/useTitleName";


const SingleToyDetails = () => {
    useTitleName('Single Toy Details page')

    const singleToyDetails = useLoaderData()
    const { id, musicToyName, picture, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription } = singleToyDetails;
    return (
        <>
            <h2 className="container mt-5 text-center fw-bold">{musicToyName}</h2>
            <div className="card mb-3 container my-5 p-5">
                <div className="row g-0" key={id}>
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><span className="fw-bold">Toy Name : </span>{musicToyName}</h5>
                            <p className="card-text"><span className="fw-bold">Detail Description : </span>{detailDescription}</p>
                            <p className="card-text"><span className="fw-bold">Seller Name : </span> {sellerName}</p>
                            <p className="card-text"><span className="fw-bold">Seller Email : </span>{sellerEmail}</p>
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

export default SingleToyDetails;