import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <div>EventDetailPage</div>
      <p>ID: {params?.id}</p>
    </>
  );
};

export default EventDetailPage;
