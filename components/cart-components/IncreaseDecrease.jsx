import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem, removeItem } from '../../redux/features/cartSlice';
import { chevronDown, chevronUp, minusIcon, plusIcon } from '../icons';

const IncreaseDecrease = ({_id, imtemCount}) => {
    const { cartItems } = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    return (
        <div className="flex  items-center gap-2 mt-1">
            <button onClick={() => imtemCount > 1 ? dispatch(decreaseItem(_id)) : dispatch(removeItem(_id))} className='bg-[#10B981] p-1'>{minusIcon}</button>
            <span>{imtemCount}</span>
            <button onClick={() => dispatch(increaseItem(_id))} className='bg-[#10B981] p-1'>{plusIcon}</button>
        </div>
    );
};

export default IncreaseDecrease;