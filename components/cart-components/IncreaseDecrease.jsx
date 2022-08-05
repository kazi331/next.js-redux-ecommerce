import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem, removeItem } from '../../redux/features/cartSlice';
import { minusIcon, plusIcon } from '../icons';

const IncreaseDecrease = ({_id, itemCount}) => {
    const { cartItems } = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    return (
        <div className="flex  items-center gap-2 mt-1 select-none">
            <button onClick={() => itemCount > 1 ? dispatch(decreaseItem(_id)) : dispatch(removeItem(_id))} className='bg-[#10B981] p-1 text-white'>{minusIcon}</button>
            <span>{itemCount}</span>
            <button onClick={() => dispatch(increaseItem(_id))} className='bg-[#10B981] p-1 text-white'>{plusIcon}</button>
        </div>
    );
};

export default IncreaseDecrease;