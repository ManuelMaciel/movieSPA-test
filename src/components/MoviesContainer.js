import React, { useEffect, useState, useRef } from 'react'
import MovieContainer from './MovieContainer'
import AxiosClient from '../components/AxiosClient'

const MoviesContainer = () => {

  const [ data, setData ] = useState([]) 
  const [ pagination, setPagination ] = useState(10)
  const [ offset, setOffset ] = useState(0)
  const [ indicator, setIndicator ] = useState({
    next: null,
    prev: null
  })

  const render = useRef(0)

  const getMovies = async () => {
    const resp = await AxiosClient.get(`/api/pelicula/?limit=${pagination}&offset=${offset}`)
    setData(resp.data.results)
    setIndicator({next: resp.data.next, prev: resp.data.previous})
    render.current += 1
  }
  

  useEffect(() => {
    getMovies()
  }, [pagination, render.current, offset])

  const setPaginationFn = (page) => {
    setPagination(page)
    setOffset(0)
  }

  return (
    <>
    {console.log(data)}
    {console.log(indicator)}
      <h2 className="text-center my-5">Movie List</h2>
      <div className="d-flex justify-content-center mb-3">
        <button type="button" className="btn btn-primary btn-sm ml-2 mr-2" onClick={() => setPaginationFn(5)}>5</button>
        <button type="button" className="btn btn-primary btn-sm ml-2 mr-2" onClick={() => setPaginationFn(10)}>10</button>
        <button type="button" className="btn btn-primary btn-sm ml-2 mr-2" onClick={() => setPaginationFn(20)}>20</button>
        <button type="button" className="btn btn-primary btn-sm ml-2 mr-2" onClick={() => setPaginationFn(50)}>50</button>
      </div>
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
      
      <div className="d-flex justify-content-center">
        <nav aria-label="pagination">
          <ul className="pagination justify-content-center">
            {indicator.prev === null ? null :
              <li className='page-item'>
                <button className="page-link" tabindex="-1" onClick={() => setOffset(offset-pagination)}>Previous</button>
              </li>
            }
            {indicator.next === null ? null :
              <li className="page-item">
                <button className="page-link" onClick={() => setOffset(offset+pagination)}>Next</button>
              </li>
            }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MoviesContainer
