import { products } from '../../../data/products'
export default function (req, res) {
    res.status(200).json(products)
}