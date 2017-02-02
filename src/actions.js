import fetch from 'isomorphic-fetch'
import { key } from './apicalls'


export const FAV = 'FAV', UNFAV = 'UNFAV', RECIVE_MOVIES = 'RECIVE_MOVIES';
export const fav = (button) => {
	{type: FAV, button}
};
export const unFav = (button) => {
	{type: UNFAV, button}
};

function reciveMovies(json) {
  return {
    type: RECIVE_MOVIES,
    json: json.results.map((item)=>{
      return item;
    })
  }
}

export default function fetchMovies(){
  return function(dispatch){
    return fetch('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key='+key)
      .then(response =>response.json())
      .then(response=>dispatch(reciveMovies(response)))
  }
}
