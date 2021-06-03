import React from 'react'
import styled from '@emotion/styled';

const MovieContainer = () => {
  return (
    <Container>
      <Card>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      <MoviesContainer>
        jolasdsdasdsadsada
      </MoviesContainer>
      </Card>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const MoviesContainer = styled.div`
  width: 100%;
  position: relative;
  justify-content: space-around;
  max-width: 250px;
  max-height: 350px;
  border-radius: .5em;
  text-decoration: none;
  background: #f1f1f1;
  margin: 1em;
  padding: 2.75em 2.5em;
  box-shadow: 0 1.5em 2.5em -.5em rgba(#000000, .1);
`

export default MovieContainer
