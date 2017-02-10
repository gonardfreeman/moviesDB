import { combineReducers } from 'redux'
import { FAV, UNFAV, RECIVE_MOVIES, UNFAV_ALL, SELECT_PAGE, SET_TOTAL_PAGES, changeVisFilter } from './actions'


function movies(state = {
  current: 1,
  total: 1,
  popular: [],
  search: []
}, action){
  switch (action.type) {
    case RECIVE_MOVIES:
      return Object.assign({}, state, {
        popular: action.json.map((item)=>{
          return {...item, fav: false,favText: 'Add to favorites'}
        })
      })
    case SELECT_PAGE:
      return Object.assign({}, state, {
        current: action.page
      })
    case FAV:
          return Object.assign({}, state, {
              popular: state.popular.map((item)=>{
                  if(item.title === action.button){
                    return {...item,
                      fav:true,
                      favText: 'Remove from favorites'
                    }
                  }
                  return item
              })
            });
    case UNFAV:
          return Object.assign({}, state, {
              popular: state.popular.map((item)=>{
                  if(item.title === action.button){
                    return {...item,
                      fav:false,
                      favText: 'Add to favorites'
                    }
                  }
                  return item
              })
            });
    case SET_TOTAL_PAGES:
      return Object.assign({}, state,{
        total:action.json
      })
    default:
      return state;

  }
}

const visibilityFilter = (state = 'SHOW_FAV', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state

  }
}


const rootReducer = combineReducers({
  movies,
  visibilityFilter
})

export default rootReducer;
