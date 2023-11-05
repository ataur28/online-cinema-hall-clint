import { Link } from 'react-router-dom';
import fof from '../../assets/fourOFour.jpg'

const ErrorElement = () => {

    return (
        <div>
            <img className='text-center m-9' src={fof} alt="" />
            <Link to="/"><button className="btn btn-accent m-5">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorElement;