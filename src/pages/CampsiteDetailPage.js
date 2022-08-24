import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteBySlug } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
  const { slug } = useParams();
  const campsite = selectCampsiteBySlug(slug);
  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsite.id} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
