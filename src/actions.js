import fetch from 'isomorphic-fetch'
import { key } from './apicalls'


export const FAV = 'FAV', UNFAV = 'UNFAV', RECIVE_MOVIES = 'RECIVE_MOVIES', SELECT_PAGE = 'SELECT_PAGE', SET_TOTAL_PAGES='SET_TOTAL_PAGES';
function fav(button){
	{type: FAV, button}
};
function unFav(button){
	{type: UNFAV, button}
};
function selectPage(page){
	return {
		type: SELECT_PAGE,
		page
	}
}

function setTotalPages(json){
	return {
		type: SET_TOTAL_PAGES,
		json
	}
}

export function reciveMovies(page,json) {
  return {
    type: RECIVE_MOVIES,
		page,
    json: json.results.map((item)=>{
      return item;
    })
  }
}

export default function fetchMovies(page){
  return function(dispatch){
		dispatch(selectPage(page))
		// console.log('https://api.themoviedb.org/3/movie/popular?page='+page.current+'&language=en-US&api_key='+key)
    return fetch('https://api.themoviedb.org/3/movie/popular?page='+page+'&language=en-US&api_key='+key)
      .then(response =>response.json())
      .then(response=>{
				dispatch(reciveMovies(page,response));
				dispatch(setTotalPages(response.total_pages));
			})
  }
}
