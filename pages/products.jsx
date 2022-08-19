import Head from 'next/head'
const Products = () => {

    return (
        <div>
             <Head>
                <title>All Products</title>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <h2 className='title'>All products</h2>
        </div>
    );
};

export default Products;