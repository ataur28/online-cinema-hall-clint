import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import DollCategory from "../DollCategory/DollCategory";
import UpComing from "../UpComing/UpComing";


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <DollCategory></DollCategory>
            <UpComing></UpComing>
        </div>
    );
};

export default Home;