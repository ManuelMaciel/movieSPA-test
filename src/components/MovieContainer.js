import React from 'react';
import { Link } from 'react-router-dom';

const MovieContainer = ({ movie }) => {

  const { id, titulo, etiquetas } = movie;

  return (  
    <tr>
      <td>{titulo}</td>
      <td>{etiquetas.map(tags => <span className='font-weigth-bold'> {tags} </span>)}</td>
      <td className='actions'>
        <Link to={`/movie/${id}`} className='btn btn-primary mr-2'>Go to the movie details</Link>
      </td>
    </tr>
  );
}

export default MovieContainer;