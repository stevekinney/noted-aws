import { useParams } from 'react-router-dom';

export const Page = () => {
  const params = useParams();
  return <article>{params.id}</article>;
};
