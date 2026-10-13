import React from 'react'
import ProductsCard from './ProductsCard'

const productsData = [
    {
        img: "/jacket.jpg",
        title: "jacket",
        desc: "Men Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/skirt.jpg",
        title: "Skirt",
        desc: "Black Floral wrap Midi Skirt",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/party-ware.jpg",
        title: "Party-ware",
        desc: "Women's Party Ware Shoes",
        rating: 3,
        price: "55.00",
    },
    {
        img: "/shirt.jpg",
        title: "Shirt",
        desc: "Men Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/watch-1.jpg",
        title: "Watchs",
        desc: "Smart Watch Vital Plus",
        rating: 4,
        price: "100.00",
    },
    {
        img: "/shoes.jpg",
        title: "Sports",
        desc: "Tracking & Running Shoes-Black",
        rating: 3,
        price: "58.00",
    },
    {
        img: "/watch-2.jpg",
        title: "Watches",
        desc: "Pocket Watches Leather Pouch",
        rating: 5,
        price: "120.00",
    },
]
const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  xl:gap-x-20 xl:gap-y-10">
            {productsData.map((item, index) => 
            <ProductsCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
                />
    
    
    
    )}
        </div>
        </div>
        </div>
  )
}

export default NewProducts