import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteBySlug } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from '../features/comments/CommentsList';

const CampsiteDetailPage = () => {
  const { slug, campsiteId } = useParams();
  const campsite = selectCampsiteBySlug(slug);

  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
