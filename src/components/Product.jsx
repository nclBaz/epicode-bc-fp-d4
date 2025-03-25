// import { useState } from "react" // hook per gestire lo stato

function Product({ id, name, price, image, discount, description, purchases, stock, selectedProduct, handleSelect }) {
  // const [isSelected, setIsSelected] = useState(false) // useState è una funzione che restituisce un array di 2 elementi: il primo è una porzione di stato, il secondo è una funzione che modifica quella porzione di stato. Inoltre useState prende come parametro il valore iniziale di quella porzione di stato

  // In questo caso specifico, ovvero nel contesto dove vogliamo far si che ci sia al massimo un unico prodotto selezionato in ogni momento, questa soluzione adottata, con lo stato locale, non può funzionare bene
  // La soluzione è un pattern che si chiama LIFTING STATE UP, che si applica portando lo stato da condividere nel parent più prossimo
  // per poi passare ai figli tale stato ed una funzione per modificarlo (se lo richiedono)
  // Così facendo, si riesce a far sincronizzare i prodotti tra di loro informando ognuno di essi di quando uno specifico prodotto verrà selezionato

  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price

  const isSelected = id === (selectedProduct && selectedProduct.id)

  return (
    <div
      className={`product ${stock === 0 ? "out-of-stock" : ""}
      ${isSelected ? "selected" : ""}
      `}
      onClick={() => handleSelect({ id })}
      // onClick={() => setIsSelected(prevState => setIsSelected(!prevState))}
    >
      <img src={image} alt={name} className="" />
      <h2>{name}</h2>
      <p>
        Prezzo: ${discount > 0 ? <s>{price}</s> : price} {discount > 0 && `--> ${discountedPrice.toFixed(2)}`}
      </p>
      <p>Purchased {purchases ?? "No data available"}</p>
      <p>{description || "No Description"}</p>
      <button disabled={stock === 0}>Aggiungi al carrello</button>
    </div>
  )
}

export default Product
