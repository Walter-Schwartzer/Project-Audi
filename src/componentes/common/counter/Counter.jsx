
const Counter = ( {contador, sumar, restar, onAdd} ) => {

  return (
    <div style={{border: "2px solid steelblue", padding: "40px", display:"flex", gap: "20px"}}>
        <button onClick={sumar}>sumar</button>
        <h3>{contador}</h3>
        <button onClick={restar}>restar</button>

        <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter