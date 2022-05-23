import { useParams } from 'react-router-dom';
import './single.css';

export default function Single() {
  //get Query params
  let params = useParams();

  return (
    <div>
      <h1>Single : {params.id}</h1>
    </div>
  );
}