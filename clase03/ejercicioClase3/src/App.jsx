
import './App.css'
import { Card } from './components/Card'

function App() {

  const contenido = {
    nombre: "Samsung Galaxy A04E 64 GB",
    descripcion:
      "No te pierdas de un solo momento con el nuevo Samsung Galaxy A04e. Con su cámara de +2 Mp; sacá fotos nítidas y claras tanto de día como de noche. El Samsung Galaxy A04e posee un procesador Octa-Core (2.3GHz,1.8GHz) para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 64 GB y expandible con una MicroSD hasta 1TB",
    precio: 93.999,
    sku: "fg54t6yyht45784654h",
    cantDisponible: 101,
  };
  
  return (
    <div className='app'>
      <Card producto={ contenido } />
    </div>
  )
}

export default App
