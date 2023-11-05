
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import useTitle from '../../hook/useTitle';

const Blog = () => {
    const [loader, setLoader] = useState(false);
    useTitle('Blog');

    const downloadPDF = () => {
        const capture = document.querySelector('.blog-page');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('blog.pdf');

        })
    }


    return (
        <div>
            <div >
                <div>
                    <h1 className='text-4xl font-bold text-center p-4' >Blog</h1>
                </div>

                <div >
                    <h3 className='text-4xl mb-2 font-bold'>Priotoma</h3>
                    <p>Priyotoma is a 2023 Bangladeshi romantic action film. The film was directed by Himel Ashraf, his second directional, and produced by Arshad Adnan under the banner of Versatile Media. The film story was written by the late Faruk Hossain alone and Himel Ashraf jointly wrote the screenplay and dialogues with him. It is a tragic love story that left an indelible mark on Sumon's (played by Shakib Khan) life, shattering his world and leaving him forever transformed, with features Idhika Paul, Shahiduzzaman Selim and Lutfur Rahman George in the lead role. Many others including Elina Shammi, Don and Shiba Shanu have been performed important roles.

                    </p>
                </div>
                <div >
                    <h3 className='text-4xl mb-2 mt-4 font-bold'>3 Idiots</h3>
                    <p>
                        3 Idiots is a 2009 Indian Hindi-language coming-of-age comedy-drama film written, edited and directed by Rajkumar Hirani, co-written by Abhijat Joshi and produced by Vidhu Vinod Chopra. Adapted loosely from Chetan Bhagat's novel Five Point Someone,the film stars Aamir Khan, R. Madhavan and Sharman Joshi in the titular roles, marking their reunion three years after Rang De Basanti (2006), while Kareena Kapoor, Omi Vaidya and Boman Irani appear in pivotal roles. Narrated through two parallel dramas, one in the present and the other set ten years in the past, the story follows the friendship of three students at an Indian engineering college and is a satire about the social pressures under the Indian education system.

                    </p>
                </div>
                <div >
                    <h3 className='text-4xl mb-2 mt-4 font-bold'>Aynabaji</h3>
                    <p>
                        Aynabaji is a Bangladeshi crime thriller film directed by Amitabh Reza Chowdhury and produced by Gousul Alam under the banner of Content Matters Production. The film was released on 30 September 2016 and received critical acclaim for its storytelling, cinematography, and performances. Aynabaji has maintained a strong reputation since its initial release, and is commonly cited by critics as one of the best South Asian films of the 2010s and 21st century.


                    </p>
                </div>
                <div >
                    <h3 className='text-4xl mb-2 mt-4 font-bold'>Mujib: The Making of a Nation</h3>
                    <p>Mujib: The Making of a Nation is a 2023 Indian-Bangladeshi co-produced biographical film directed by Shyam Benegal. It stars Arifin Shuvoo as Sheikh Mujibur Rahman, the first president of Bangladesh and father of the nation, popularly known as Bangabandhu , who was assassinated with his family during coup d'état in 1975.[2] This is the first government produced biopic about him.

                        The film was produced on the occasion of Mujib Year.Arifin Shuvoo, Nusrat Imrose Tisha and Zayed Khan has taken only as remuneration for acting in this film. The film was scheduled to start production on 18 March 2020, a day after Bangabandhu's birth centenary, but it was delayed due to the COVID-19 pandemic.</p>
                </div>
            </div>
            {/* <Button
                onClick={downloadPDF}
                disabled={!(loader === false)}>
                {loader ? (
                    <span>Downloading</span>
                ) : (
                    <span>Download</span>
                )}

            </Button> */}
            <button onClick={downloadPDF}
                disabled={!(loader === false)}
                className="btn btn-primary m-4 ">
                {loader ? (
                    <span>Downloading</span>
                ) : (
                    <span>Download</span>
                )}
            </button>

        </div>
    );
};

export default Blog;