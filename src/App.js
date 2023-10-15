import "./App.css";
import Header from "./components/header";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #333;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
      </MainContainer>
    </div>
  );
}

export default App;
