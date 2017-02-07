import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware, push } from 'react-router-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import fetchMovies, { reciveMovies, FAV, UNFAV, fav, unFav } from './actions'
import {Provider, connect} from 'react-redux';
import { Router, Route, Link, Redirect, browserHistory } from 'react-router'
import styles from './index.css'
import  Paginator from './Paginator'


const loggerMiddleware = createLogger()
const middleware = routerMiddleware(browserHistory)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,middleware,loggerMiddleware))

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
class NextPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    store.dispatch(fetchMovies(this.state.value));
    event.preventDefault();
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={"from 1 to "+this.props.pages+" at "+this.props.current} value={this.state.value} onChange={this.handleChange}/>
          <button type="submit">CLICK ME!</button>
        </form>
      </div>
    )
  }
}


class Movies extends React.Component {
    render(){
      return (
            <div key={this.props.key}>
                <div className={styles.title}>{this.props.name}</div>
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
  constructor(props){
    super(props);
    this.page = this.props.params.page;
  }
  checkType(page){
    if(typeof page === 'undefined'){
      return 1
    }
    return page
  }
  componentDidMount(){
    store.dispatch(fetchMovies(this.checkType(this.page)));
  }
  render(){
    const movs = store.getState().movies.popular.map((item)=>{
      return (
          <Movies
            key={item.title.toString()}
            name={item.title}
            img={'https://image.tmdb.org/t/p/w500'+item.poster_path}
            descr={item.overview}
            fav={item.fav}
            text={item.title.toString()}
            favText={item.favText}
            />

      );
    });
    return (
      <div>
        <Paginator
          current={store.getState().movies.current}
          total={store.getState().movies.total}
          />
        <NextPage
            pages={store.getState().movies.total}
            current={store.getState().movies.current}
          />
        <div className={styles.parts}>{ movs }</div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};


// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
let MovApp = connect(mapStateToProps)(MoviesApp);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={MovApp}>
            <Route path='/:page' component={MovApp}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
