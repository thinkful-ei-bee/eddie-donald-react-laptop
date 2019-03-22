import React from 'react';

export default class Feature extends React.Component{



	render() {
    const selectedClass = this.props.item.name === this.props.selected[this.props.value].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;

		return(
			<li key={this.props.index} className="feature__item">
	      <div className={featureClass}
	        onClick={e => this.props.updateFeature(this.props.value, this.props.item)}>
          { this.props.item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.item.cost) })
	      </div>
	    </li>
			)
	}

}