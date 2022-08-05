import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cartSlice";
import { addToCartIcon } from "../icons";

const AddToCart = ({product}) => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(addItem({ ...product, imtemCount: 1 }))} className='px-2 py-2 border-1  border-[#d3d3d3] dark:border-[#505050] hover:border-transparent hover:bg-[#10B981] hover:text-white addToCart'> {addToCartIcon} </button>
        </>
    );
};

export default AddToCart;