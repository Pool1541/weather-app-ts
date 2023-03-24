import Container from "@mui/material/Container";
import Card from "./Card";

function App() {
  return (
    <Container
      maxWidth="xs"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Card />
    </Container>
  );
}

export default App;
