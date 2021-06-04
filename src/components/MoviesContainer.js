import React, { useEffect, useState } from 'react'
import MovieContainer from './MovieContainer'
import AxiosClient from '../components/AxiosClient'

const MoviesContainer = () => {

  const [ data, setData ] = useState([]) 

  const getMovies = async () => {
    const resp = await AxiosClient.get('/api/pelicula')
    setData(resp.data)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
    {console.log(data)}
      <h2 className="text-center my-5">Movie List</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Tags</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data === 0
            ? "there are no movies"
            : data.map((movie) => (
              <MovieContainer key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MoviesContainer
