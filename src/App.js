import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import fetchMovies, { FAV, UNFAV, fav, unFav } from './actions'
import {Provider, connect} from 'react-redux';

const loggerMiddleware = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,loggerMiddleware))
store.dispatch(fetchMovies());

//debug
var gs = ()=>{
  console.log(store.getState());
}

class FavButton extends React.Component {
  render() {
    if(this.props.fav == true){
        return (
          <div>
            <button onClick={()=>store.dispatch({
                type: UNFAV,
                button: this.props.text
              })}>{this.props.favText}</button>
            <button onClick={gs}>GET STATE</button>
          </div>
        );
    }else if(this.props.fav == false){
      return (
        <div>
          <button onClick={()=>store.dispatch({
              type: FAV,
              button: this.props.text
            })}>{this.props.favText}</button>
          <button onClick={gs}>GET STATE</button>
        </div>
      );
    }
  }
}



class Movies extends React.Component {
    render(){
      return (
            <div key={this.props.key}>
                <div>{this.props.name}</div>
                <div><img src={this.props.img} alt=""/></div>
                <div>{this.props.descr}</div>
                  <FavButton
                      fav={this.props.fav}
                      text={this.props.text}
                      favText={this.props.favText}
                    />
            </div>
        );
    }
}

class MoviesApp extends React.Component {
  render(){
    // console.log(store.getState());
    const movs = store.getState().movies.popular.map((item)=>{
      return (
          <Movies
            key={item.title.toString()}
            name={item.title}
            img={'https://image.tmdb.org/t/p/w300'+item.poster_path}
            descr={item.overview}
            fav={item.fav}
            text={item.title.toString()}
            favText={item.favText}
            />
      );
    });
    return <div>{ movs }</div>
  }
}

const mapStateToProps = (state) => {
  return {state};
};

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
let MovApp = connect(mapStateToProps)(MoviesApp);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MovApp />
      </Provider>
    )
  }
}
