import styled from "styled-components";
import Benefit from "./Components/Benefit";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

export default function App() {
  return (
    <Container>
      <Home />
      <Benefit />
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;
