import React from 'react';
import Feature from './Feature'
import FeatureDisplay from './FeatureDisplay'

export default class Features extends React.Component {

	render() {
		let featureList = Object.keys(this.props.features)
          .map(key => {
            // takes features from props
            const options = this.props.features[key].map((item, index) => {
            	return (
            	<Feature
	            	value={key}
	            	items={item}
	            	index={index}
	            	updateFeature = {this.props.updateFeature}
	            	selected={this.props.selected}
	            />)
            });
            // returns array of all features
            return <FeatureDisplay value={key} options={options}/>
          });

		return(
			<section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          { featureList }
        </section>
		)
	}
}