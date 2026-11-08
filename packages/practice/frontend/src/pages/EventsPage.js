import { Link } from 'react-router-dom';

const events = [
  {
    id: '1',
    title: 'hello',
  },
  {
    id: '2',
    title: 'world',
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
