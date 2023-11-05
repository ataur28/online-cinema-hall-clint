import { Link } from "react-router-dom";


const AllDollCategory = ({ subDolls }) => {
    const { _id,toyName, sellerName, category, price, quantity } = subDolls;
    return (


        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                <div className="flex items-center space-x-3">
                    
                    <div>
                        <div className="font-bold">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {toyName}
            </td>
            <td>
                {category}
                
            </td>
            <td>
                ${price}
            </td>
            <td>
                {quantity}
            </td>
            <th>
            <Link to={`/subDolls/${_id}`}><button className='btn btn-primary'>WATCH</button></Link>
            </th>
        </tr>


    );
};

export default AllDollCategory;