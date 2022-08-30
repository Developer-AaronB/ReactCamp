import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <h1>Delete this later</h1>
      <DisplayList />
    </Container>
  );
};

export default HomePage;
