import React from 'react';
import Option from './Option';

export default class Summary extends React.Component {
  
  render(){
    const summary = Object.keys(this.props.selected)
    .map(key => <Option value ={key} key={key} selected={this.props.selected}/>);

    const total = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);
    
    return(
      <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
        {summary}
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(total) }
        </div>
      </div>
    </section>
      )
  } 
  
}
