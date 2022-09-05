import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteBySlug } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";
import Error from "../components/Error";
import Loading from "../components/Loading";

const CampsiteDetailPage = () => {
  const { slug } = useParams();
  const campsite = useSelector(selectCampsiteBySlug(slug));

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />
  } else {
    content = (
      <>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsite.id} />
      </>
    );
  }

  return (
    <Container>
      {campsite && <SubHeader current={campsite.name} detail={true} />}
      <Row>
        {content}
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
