import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteBySlug } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

const CampsiteDetailPage = () => {
  const { slug } = useParams();
  const campsite = selectCampsiteBySlug(slug);

  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
