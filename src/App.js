import React, { Component } from 'react';
import Immutable from 'immutable';
import { movies, unFavAll, initialState, faver } from './reducers'
import { createStore } from 'redux'
import { FAV, UNFAV, fav, unFav } from './actions'
import {Provider, connect} from 'react-redux';

const store = createStore(faver);
//debug
var gs = ()=>{
  console.log(store.getState());
}

class FavButton extends React.Component {
  render() {
    // console.log(this.props.fav);
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
    const movs = store.getState().results.map((item)=>{
      // console.log(store.getState());
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

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
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
