import styled from "styled-components";
import Dashboard from "./components/Dashboard/Dashboard";

const AppContainer = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #45b6fe;
`;

function App() {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
}

export default App;
