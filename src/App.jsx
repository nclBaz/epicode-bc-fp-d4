import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Product from "./components/Product"

const products = [
  {
    id: 0,
    name: "Prodotto 1",
    price: 19.99,
    image: "https://prd.place/300/200?id=1",
    discount: 0,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat enim reiciendis odio totam doloremque vero. Omnis a doloremque soluta, praesentium perspiciatis reprehenderit voluptatibus ab hic eligendi, numquam fugiat incidunt pariatur?",
    purchases: 0,
    stock: 0,
  },
  {
    id: 1,
    name: "Prodotto 2",
    price: 9.99,
    image: "https://prd.place/300/200?id=2",
    discount: 10,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat enim reiciendis odio totam doloremque vero. Omnis a doloremque soluta, praesentium perspiciatis reprehenderit voluptatibus ab hic eligendi, numquam fugiat incidunt pariatur?",
    purchases: 10,
    stock: 0,
  },
  {
    id: 2,
    name: "Prodotto 3",
    price: 1.99,
    image: "https://prd.place/300/200?id=3",
    discount: 20,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat enim reiciendis odio totam doloremque vero. Omnis a doloremque soluta, praesentium perspiciatis reprehenderit voluptatibus ab hic eligendi, numquam fugiat incidunt pariatur?",
    purchases: 10,
    stock: 0,
  },
  { id: 3, name: "Prodotto 4", price: 29.99, image: "https://prd.place/300/200?id=4", discount: 15, purchases: 20, stock: 10 },
  { id: 4, name: "Prodotto 5", price: 59.99, image: "https://prd.place/300/200?id=5", discount: 10, stock: 10 },
  { id: 5, name: "Prodotto 6", price: 5.99, image: "https://prd.place/300/200?id=6", discount: 30, purchases: 0, stock: 10 },
  { id: 6, name: "Prodotto 7", price: 5.99, image: "https://prd.place/300/200?id=7", discount: 20, purchases: 20, stock: 10 },
  { id: 7, name: "Prodotto 8", price: 5.99, image: "https://prd.place/300/200?id=8", discount: 5, purchases: 20, stock: 10 },
  { id: 8, name: "Prodotto 9", price: 5.99, image: "https://prd.place/300/200?id=9", discount: 10, purchases: 0, stock: 10 },
  { id: 9, name: "Prodotto 10", price: 5.99, image: "https://prd.place/300/200?id=10", discount: 20, purchases: 20, stock: 10 },
]

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleSelect = selected => {
    setSelectedProduct(selected)
  }

  return (
    <>
      <Navbar />
      {products.length ? (
        products.map(product => (
          // <Product key={product.id} name={product.name} price={product.price} image={product.image} discount={product.discount} />
          <Product key={product.id} {...product} selectedProduct={selectedProduct} handleSelect={handleSelect} />
        ))
      ) : (
        <div>NO PRODUCTS</div>
      )}
      <Footer />
    </>
  )
}

export default App
