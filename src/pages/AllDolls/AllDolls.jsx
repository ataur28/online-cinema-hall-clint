import { useEffect, useState } from "react";
import AllDollCategory from "../AllDollCategory/AllDollCategory";
import useTitle from "../../hook/useTitle";

const AllDolls = () => {
    useTitle('All Video');
    const [dolls, setDolls] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/dolls')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDolls = dolls.filter((doll) =>
        doll.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mb-10 mt-10">
            <form>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-secondary">Search</button>
                </div>
            </form>

            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Director Name</th>
                            <th>Name</th>
                            <th>Sub-category</th>
                            <th>Ticket Price</th>
                            <th>Video Quality</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDolls.map((subDolls) => (
                            <AllDollCategory key={subDolls._id} subDolls={subDolls} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDolls;







