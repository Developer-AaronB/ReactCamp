import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteBySlug } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from '../features/comments/CommentsList';
import { selectCommentsByCampsiteId } from "../features/comments/commentsSlice";
const CampsiteDetailPage = () => {
  const { slug, campsiteId } = useParams();
  const campsite = selectCampsiteBySlug(slug);
  const campsiteComments = selectCommentsByCampsiteId(campsiteId)
  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteComments} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
