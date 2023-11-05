import useTitle from "../../../hook/useTitle";


const Payment = () => {
    useTitle('Payment');
    return (
        <div>
            <h2 className="uppercase text-3xl mt-8 mb-8 text-center font-semibold ">Payment</h2>
            <form >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="form-control">
                        <input type="text" name="cardNumber" placeholder="Card number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="cardCode" placeholder="MM/YY/CVC" className="input input-bordered" />
                    </div>
                    
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Pay</button>
                </div>
            </form>
        </div>
    );
};

export default Payment;