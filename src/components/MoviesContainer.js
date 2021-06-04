import React, { useEffect, useState } from 'react'
import AxiosClient from '../components/AxiosClient'

const MoviesContainer = () => {

  const [ data, setData ] = useState() 

  const getMovies = async () => {
    const resp = await AxiosClient.get('/api/pelicula')
    setData(resp)
    console.log(data)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      <h2 className="text-center my-5">Movie List</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </>
  )
}

export default MoviesContainer
