import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/features/cartSlice';
import { minusIcon, plusIcon } from '../icons';

const IncreaseDecrease = ({ product }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartItems);
    const item = cartItems.find(item => item._id === product._id)

    return (
        <div className="flex  items-center gap-2 mt-1 select-none">
            <button onClick={() => dispatch(removeItem(product))} className='bg-[#10B981] p-1 text-white'>{minusIcon}</button>
            <span>
                {item?.quantity}
            </span>
            <button onClick={() => dispatch(addItem(product))} className='bg-[#10B981] p-1 text-white'>{plusIcon}</button>
        </div>
    );
};

export default IncreaseDecrease;