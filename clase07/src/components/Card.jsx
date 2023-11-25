import PropTypes from "prop-types";

const Card = ({ producto, onCompra }) => {
  return (
    <div className="card">
      <h2 className="nombre">{producto.nombre}</h2>
      <p className="descripcion">{producto.descripcion}</p>
      <b className="precio">$ {producto.precio} </b>
      <p className="sku">{producto.sku}</p>
      <p className="cantDisponible">
        {producto.cantDisponible} unidades disponibles
      </p>
      <button onClick={onCompra}>Comprar</button>
    </div>
  );
};
Card.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    sku: PropTypes.string.isRequired,
    cantDisponible: PropTypes.number.isRequired,
  }).isRequired,
  onCompra: PropTypes.func.isRequired,
};

export { Card };
