import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hook/useTitle";


const AddDoll = () => {
    useTitle('Add A Video');

    const { user } = useContext(AuthContext);
    const emails = user?.email

    const handleAddDoll = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const picture = form.picture.value;
        const doll = {toyName, sellerName, sellerEmail, category, price, rating, quantity, details, picture}
        console.log(doll);

        fetch('http://localhost:5000/dolls',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(doll)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Add A Video Successfully')
            }
        })

    }


    return (

        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Add A Video</h2>
            <form onSubmit={handleAddDoll} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Director Name</span>
                        </label>
                        <input type="text" name="sellerName" placeholder="Director name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Director Email</span>
                        </label>
                        <input type="email" name="sellerEmail"
                        defaultValue={emails} placeholder="Director email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        {/* <input type="text" name="category" placeholder="sub-category" className="input input-bordered" /> */}

                        <select className="input input-bordered" name="category" id="cars">
                            <option value="movie">Movie</option>
                            <option value="natok">Natok</option>
                            <option value="standshow">Stand Show</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ticket Price</span>
                        </label>
                        <input type="text" name="price" placeholder="ticket price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Video Quality</span>
                        </label>
                        <input type="text" name="quantity" placeholder="video quality" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="details" placeholder="detail " className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture UR</span>
                    </label>
                    <input type="text" name="picture" placeholder="picture URL of the video" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Add A Video</button>
                </div>
            </form>


        </div>

    );
};

export default AddDoll;