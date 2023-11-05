import { Link } from "react-router-dom";


const SubCategory = ({ subDolls }) => {
    // console.log(subDolls);
    const { _id, picture, toyName, price, rating } = subDolls;
    return (
        <div>
            <div className="card w-96 glass bg-slate-200 mb-4 mt-4">
                <figure><img className="border-cyan-400 rounded-lg m-5 h-[300px] w-[300px]" src={picture} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {toyName}</h2>
                    <p className="text-left">Ticket Price: ${price}</p>
                    <p className="text-left">Rating: {rating}</p>
                    <div className="card-actions justify-end">
                    
                        <Link to={`/subDolls/${_id}`}><button className='btn btn-primary'>WATCH</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;