import "./App.css";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="Bienvenido!!! Esta es una e-commerce de Cervezas!!"></ItemListContainer>
    </div>
  );
} 
