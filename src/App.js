import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Inicio from "./components/inicio/inicio";

function App() {
  return (
    <div className="App">
      <Container>
        <Inicio/>
      </Container>
    </div>
  );
}

export default App;
