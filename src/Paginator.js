import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.css'


function PageItem(props) {
  return <li><Link to={props.value.toString()} onClick={()=>this.props.router.push(props.value)}>{props.value}</Link></li>;
}
class Pages extends React.Component{
  render(){
    const pages = this.props.pages.map((item, index)=>{
      return(
        <PageItem
          key={"page "+index}
          value={item}
          />
      );
    })
    return(
      <ul className={styles.paginator__ul}>{pages}</ul>
    );
  }
}
class Paginator extends React.Component {
  render() {
    const current = parseInt(this.props.current), total = parseInt(this.props.total);
    let mPages = [];
    if(current <= 4) mPages = [...1,4,5,6]
    if(current > 4) mPages = [...1,current-1,current,current+1]
    if(current >= total-3) mPages = [...1,total-5,total-4,total-3]
      return (
        <div className={styles.paginator}>
          <div>
            <Pages
              pages={[1,2,3]}
              />
          </div>
          <div>...</div>
            <div>
              <Pages
                pages={mPages}
                />

            </div>
            <div>...</div>
              <div>
                <Pages
                  pages={[total-2,total-1,total]}
                  />
              </div>
          </div>
      );
  }
}
export default Paginator;
