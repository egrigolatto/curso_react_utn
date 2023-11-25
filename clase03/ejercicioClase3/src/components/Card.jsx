

const Card = ({producto}) => {
    return (
      <div className="card">
        <h2 className="nombre">{ producto.nombre}</h2>
        <p className="descripcion">{ producto.descripcion }</p>
        <b className="precio">$ {producto.precio} </b>
        <p className="sku">{ producto.sku}</p>
        <p className="cantDisponible">{producto.cantDisponible} unidades disponibles</p>
      </div>
    );
}

export { Card }