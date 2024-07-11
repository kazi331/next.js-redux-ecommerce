import Head from 'next/head';
const Products = () => {

    return (
        <div>
            <Head>
                <title>All Products</title>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <h2 className='title'>All products</h2>
            <button className='text-red-500 bg-white p-4 m-1 rounded-lg' onClick={() => { throw new Error("Sample error from client") }}>Through Error</button>
        </div>
    );
};

export default Products;