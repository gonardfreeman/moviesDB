import { combineReducers } from 'redux'
import { FAV, UNFAV, fav, unFav, RECIVE_MOVIES, UNFAV_ALL } from './actions'


function movies(state = {
  popular: [],
  search: []
}, action){
  switch (action.type) {
    case RECIVE_MOVIES:
      return Object.assign({}, state, {
        popular: action.json.map((item)=>{
          return Object.assign({}, item, {
            fav: false,
            favText: 'Add to favorites'
          })
        })
      })
    case FAV:
          return Object.assign({}, state, {
              popular: state.popular.map((item)=>{
                  if(item.title === action.button){
                    return Object.assign({}, item, {
                      fav:true,
                      favText: 'Remove from favorites'
                    })
                  }
                  return item
              })
            });
    case UNFAV:
          return Object.assign({}, state, {
              popular: state.popular.map((item)=>{
                  if(item.title === action.button){
                    return Object.assign({}, item, {
                      fav:false,
                      favText: 'Add to favorites'
                    })
                  }
                  return item
              })
            });
    default:
      return state;

  }
}

// export const faver = (state = {
//   popular: [],
//   search: []
// }, action)=>{
//
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  movies,
  // faver
})

export default rootReducer;
