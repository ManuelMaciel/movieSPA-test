<div align="center" id="top"> 
  <img src="https://media.tenor.com/images/75e9052f5b612b8bf7e611a55e8c863b/tenor.gif" alt="Movietest" />

  &#xa0;

  <!-- <a href="https://movietest.netlify.app">Demo</a> -->
</div>

<h1 align="center">Movietest</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/ManuelMaciel/movieSPA-test?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/ManuelMaciel/movieSPA-test?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ManuelMaciel/movieSPA-test?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/ManuelMaciel/movieSPA-test?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/movietest?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/movietest?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/movietest?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Movietest 🚀 Under construction...  🚧
</h4> 

<hr> -->



## :dart: Test the project ##

to start testing the project once you have to follow the steps to clone the repository and install the dependencies, in the first view the home page the api movies are loaded with a limit that you can modify, the default is 10, the movies are divided in rows, and in each column there is a button to go to the movie details, in the header there is a button to login and logout if you are already logged in, you need to be logged in to post/delete comments, at first I wanted to do everything in css but because of the laborious work that represents to center a div and work with grid I chose the faithful bootstrap; for the passage of data information context is used except in components whose parents can give them certain props, axios is used for requests, and the data is stored in localstorage, when a component is rendered the first thing it does if there is a token is to check if the token is still valid, if it is not the case with the refresh asks for a new token; I hope I have not forgotten anything : )

## :rocket: Technologies ##

The following tools were used in this project:

- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://reactrouter.com/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/ManuelMaciel/movieSPA-test

# Access
$ cd movieSPA-test

# Install dependencies
$ yarn or npm

# Run the project
$ yarn start or npm start

# The server will initialize in the <http://localhost:3000>
```