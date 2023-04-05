import Banner from "./components/banner";
import './app.css'
import Formulario from "./components/form";
import Container from "./components/container";

function App() {
  return (
   <>
    <Banner />
    <Container>
      <Formulario />
    </Container>
   </>
  );
}

export default App;
