import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "../MyToysRow/MyToysRow";
import Swal from "sweetalert2";
import useTitleName from "../../Hooks/useTitleName";

const MyToys = () => {
    useTitleName('My Toys page')

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/myToys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])
    // My Toys Delete functionality
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining)
                        }
                    })

            }
        })
    }
    // My Toys Update functionality
    // const handleMyToyUpdate = id => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "Do you want to Update Toy Data?",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, Update it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://music-store-server-nz5vqtaax-75mdnazmul.vercel.app/myToys/${id}`, {
    //                 method: 'PATCH',
    //                 headers : {
    //                     'content-type' : 'application/json'
    //                 },
    //                 body: JSON.stringify({status: "Update"})
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.modifiedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your file has been deleted.',
    //                             'success'
    //                         )
    //                         const remaining = myToys.filter(myToy => myToy._id !== id);
    //                         // const updated = myToys.find(myToy => myToy._id === id);
    //                         setMyToys(remaining)
    //                     }
    //                 })

    //         }
    //     })
    // }

    return (
        <div className="container py-5 text-center">
            <h2 className="text-center pb-4">My Toys</h2>
            <Table bordered hover size="sm">
                <thead>
                    <tr className=" bg-light">
                        <th>Toy Photo</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Sub-Category</th>
                        <th>Details Info</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Quantity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(myToy => <MyToysRow
                            key={myToy._id}
                            myToy={myToy}
                            handleDelete={handleDelete}
                            // handleMyToyUpdate={handleMyToyUpdate}
                        ></MyToysRow>
                        )
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default MyToys;