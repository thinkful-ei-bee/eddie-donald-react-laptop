import React from 'react';

export default class FeatureDisplay extends React.Component{
	render() {
	return (
		<div className="feature" key={this.props.value}>
            <div className="feature__name">{this.props.value}</div>
            <ul className="feature__list">
              {this.props.options}
            </ul>
          </div>
  	)
	}
}