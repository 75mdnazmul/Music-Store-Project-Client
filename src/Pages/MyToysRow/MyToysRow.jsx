import PropTypes from "prop-types";

const MyToysRow = ({ myToy, handleDelete }) => {

    const { _id, name, photo, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description } = myToy;

    return (
        <tr className="align-middle">
            <td><img src={photo} style={{ width: "70px" }} alt="" /></td>
            <td className="fw-bold">{name}</td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{subCategory}</td>
            <td>{description}</td>
            <td>{price}$</td>
            <td>{rating}</td>
            <td>{availableQuantity}</td>
            <td>
                <button className='px-3 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#0e8a00' }} title="Click to Update">Update</button>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='px-3 mb-5 rounded-2 fw-bold border-0 py-2' style={{ color: 'white', backgroundColor: '#e90000' }} title="Click to Delete">Delete</button>
            </td>
        </tr>
    );
};

MyToysRow.propTypes = {
    myToy: PropTypes.object.isRequired,
    handleDelete: PropTypes.object.isRequired
};
export default MyToysRow;