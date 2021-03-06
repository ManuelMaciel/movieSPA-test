import React, { useEffect, useState, useCallback, useContext } from "react";
import AxiosClient from "./AxiosClient";
import MovieComment from "./MovieComment";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/useContext";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);

  const { isLogged, loading, setLoading, access } = useContext(UserContext);

  let { id } = useParams();

  const deleteComment = async (idComment) => {
    const headers = {
      Authorization: `Bearer ${access}`,
    };
    try {
      const resp = await AxiosClient.delete(`/api/comentario/${idComment}/`, {
        headers: headers,
      });
      setLoading(!loading);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieById = useCallback(async () => {
    // setMovieData([])
    Promise.all([
      AxiosClient.get(`/api/pelicula/${id}`),
      AxiosClient.get(`/api/pelicula/${id}/comentarios/`),
      AxiosClient.get(`/api/pelicula/${id}/criticas/`),
    ])
      .then((resultado) => {
        setMovieData([resultado, ...movieData]);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  useEffect(() => {
    getMovieById();
  }, [loading]);

  return (
    <>
      {movieData.length === 0 ? null : (
        <div className="row justify-content-center mt-2 mb-2">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="text-center mb-4 font-weight-bold">
                  {movieData[0][0].data.titulo}
                </div>
                <div className="d-flex justify-content-around">
                  {movieData[0][0].data.etiquetas.map((tag) => (
                    <h5 key={tag}>
                      <span className="badge badge-pill badge-danger">
                        {tag}
                      </span>
                    </h5>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                {movieData[0][2].data.length === 0 ? (
                  <div className="d-flex flex-column-reverse bd-highlight">
                    <div className="p-2 bd-highlight border-bottom">
                      No reviews
                    </div>
                  </div>
                ) : (
                  <div className="d-flex flex-column-reverse bd-highlight">
                    {movieData[0][2].data.map((review) => (
                      <div className="p-2 bd-highlight border-bottom">
                        <div className="mt-2 mb-2">
                          <span className="badge badge-pill badge-warning">
                            Rating: {review.calificacion}
                          </span>
                          <span className="ml-2">
                            {review.usuario.first_name}{" "}
                            {review.usuario.last_name}:{" "}
                          </span>
                        </div>
                        <blockquote className="blockquote mb-0">
                          <span className="d-flex align-items-end blockquote-footer">
                            {review.mensaje}
                          </span>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5">
            <div className="card">
              <div className="card-body">
                <div className="text-center font-weight-bold">Comments</div>
              </div>
              <div className="card-footer">
                {movieData[0][1].data.length === 0 ? (
                  <div className="d-flex flex-column-reverse bd-highlight">
                    <div className="p-2 bd-highlight border-bottom">
                      No comments
                    </div>
                  </div>
                ) : (
                  <div className="d-flex flex-column-reverse bd-highlight">
                    {movieData[0][1].data.map((comment) => (
                      <div className="p-2 bd-highlight border-bottom">
                        <div className="mt-2 mb-2">
                          <span className="badge badge-pill badge-warning">
                            Rating: {comment.calificacion}
                          </span>
                          <span className="ml-2">
                            {comment.usuario.first_name}{" "}
                            {comment.usuario.last_name}:{" "}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteComment(comment.id)}
                          type="button"
                          class="btn btn-danger btn-sm"
                        >
                          Delete comment
                        </button>
                        <blockquote className="blockquote mb-0">
                          <span className="d-flex align-items-end blockquote-footer">
                            {comment.mensaje}
                          </span>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                )}
                {isLogged ? (
                  <MovieComment id={id} />
                ) : (
                  <div className="form-group d-flex justify-content-center mt-5">
                    <h3>
                      <span className="badge badge-pill badge-danger">
                        to comment you need to be logged in
                      </span>
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
