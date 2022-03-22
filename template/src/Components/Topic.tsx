import { useParams } from 'react-router-dom';

export const Topic = () => {
  const component: { topicId?: string } = useParams();
  return (
    <div className="App-topic">
      <p>Requested topic:</p>
      <p>
        <strong>{component.topicId}</strong>
      </p>
      <p>Check the url change according to your choice</p>
    </div>
  );
};
