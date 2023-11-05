import { Link } from "react-router-dom";
import UpdateDollData from "../UpdateDollData/updateDollData";



const AllMyDolls = ({ myDolls, handleDelete }) => {
    const { _id, picture, toyName, category, price, quantity, details } = myDolls;

    // const handleUpdate = id =>{
    //     console.log(id);
    //     const result = myDolls.filter(doll => doll._id == id)
    //     console.log(result);
    // }


    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}
                        </div>

                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>
                ${price}
            </td>
            <td>{quantity}</td>
            <td>{details}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">DELETE</button>
            </th>
            <th>

                <Link to={`/updateDollData/${myDolls._id}`}><button   className="btn btn-secondary btn-xs">UPDATE</button></Link>

                {/* <button className="btn btn-secondary btn-xs">UPDATE</button> */}
                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-6" className="btn btn-secondary ">UPDATE</label> */}

                {/* Put this part before </body> tag */}
                {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" /> */}
                {/* <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="text-center font-bold text-3xl mb-5">Update Toy Data</h3>

                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={category} placeholder="price" className="input input-bordered" />
                            </div>

                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Confirm</label>
                            </div>
                        </form>
                    </div>
                </div> */}



            </th>
        </tr>

    );
};

export default AllMyDolls;