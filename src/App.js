import React, { Component } from 'react';
import Immutable from 'immutable';
import { movies, unFavAll, initialState, faver } from './reducers'
import { createStore } from 'Redux'
import { FAV, UNFAV, fav, unFav } from './actions'


export const store = createStore(faver);


class Movies extends React.Component {
    render(){
      return (
            <div>
                <div key={this.props.key}>{this.props.name}</div>
                <div key={this.props.key}><img src={this.props.img} alt=""/></div>
                <div key={this.props.key}>{this.props.descr}</div>
            </div>
        );
    }
}
var gs = ()=>{
  console.log(store.getState());
}
class FavButton extends React.Component {
  render() {
    if(this.props.hasOwnProperty('fav') && this.props.fav == true){
      store.subscribe(()=>store.getState());
        return (
          <div>
            <button onClick={()=>store.dispatch({
                type: UNFAV,
              })} key={this.props.key}>REMOVE FROM FAV</button>
          </div>
        );
    }else{
      store.subscribe(()=>store.getState());
      return (
        <div>
          <button onClick={()=>store.dispatch({
              type: FAV,
              button: this.props.key
            })} key={this.props.key}>ADD TO FAV</button>
          <button onClick={gs}>GET STATE</button>
        </div>
      );
    }
  }
}


export default class App extends Component {
  render(){
      const movs = store.getState().results.map((item, index)=>{
          return (
                <div>
                  <Movies
                      key={index}
                      name={item.title}
                      img={'https://image.tmdb.org/t/p/w300'+item.poster_path}
                      descr={item.overview}
                  />
                  <FavButton
                      key='fav'
                      fav={item}
                    />
                </div>
          );
      });
      return <div>{ movs }</div>
  }
}
