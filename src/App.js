import React, { Component } from 'react';
import Immutable from 'immutable';

var movies = Immutable.Map({
    term1: {
        name: 'Terminator',
        img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/da/T1_poster3.jpg/204px-T1_poster3.jpg',
        descr: 'A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress'
    },
    term2: {
        name: 'Terminator 2',
        img: 'https://upload.wikimedia.org/wikipedia/en/8/85/Terminator2poster.jpg',
        descr: 'A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress'
    },
    term3: {
        name: 'Terminator 3',
        img: 'https://my-hit.org/storage/240017_500x800x250.jpg',
        descr: 'A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress'
    },
    term4: {
        name: 'Terminator 4',
        img: 'https://upload.wikimedia.org/wikipedia/ru/b/bf/Terminator_Salvation_poster.jpg',
        descr: 'A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress'
    }
});


class Movies extends React.Component {
    render(){
        return (
            <div>
                <div>{this.props.name}</div>
                <div><img src={this.props.img} alt=""/></div>
                <div>{this.props.descr}</div>
            </div>
        );
    }
}



export default class App extends Component {
  render(){
      return (
          <div>
              <Movies
                  name={movies.get('term1').name}
                  img={movies.get('term1').img}
                  decr={movies.get('term1').decsr}
              />
              <Movies
                  name={movies.get('term2').name}
                  img={movies.get('term2').img}
                  decr={movies.get('term2').decsr}
              />
              <Movies
                  name={movies.get('term3').name}
                  img={movies.get('term3').img}
                  decr={movies.get('term3').decsr}
              />
              <Movies
                  name={movies.get('term4').name}
                  img={movies.get('term4').img}
                  decr={movies.get('term4').decsr}
              />
          </div>
      );
  }
}
