import React, { useState, useContext } from 'react'
import Error from './Error'
import AxiosClient from './AxiosClient';
import { UserContext } from '../context/useContext'

const MovieComment = ({id}) => {

  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const [ error, setError ] = useState(false)
  const [ errorMsg, setErrorMsg ] = useState("")

  const { access, refresh } = useContext(UserContext);
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    // validate form
    if (message.trim() === "" || typeof value === 'number' ) {
      setErrorMsg('You must enter rating adnd message')
      setError(true);
      return;
    }
    setError(false);

    const data = {
      calificacion: Number(rating),
      mensaje: message,
      pelicula: Number(id)
    };

    const headers = {
      'Authorization': `Bearer ${access}`,
    }

    addComment(data, headers);
    console.log(headers)
  }

  const addComment = async (data, headers) => {
    try {
      const resp = await AxiosClient.post('/api/comentario/', data, { headers: headers })
      console.log(access)
      console.log(resp)
      await setMessage("");
      await setRating(0);
    } catch (error) {
      console.error(error)
    }
  }
  

  return (
    <form 
      className="mt-2"
      onSubmit={handleSubmitComment}  
    >
        <div className="form-group">
          <h5>What's your comment?</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Comment?"
            name="comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h5>What's your rating? (0 - 100)</h5>
          <input
            type="number"
            className="form-control"
            placeholder="Rate"
            name="rating"
            min="0"
            max="100"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mb-5"
        >
          Post your comment
        </button>
        {error ? <Error message={errorMsg} /> : null }
      </form>
  )
}

export default MovieComment
