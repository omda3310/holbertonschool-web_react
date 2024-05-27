import React from 'react';
import BodySection from './BodySection';
import { PropTypes } from 'prop-types';
import './BodySection';

export default class BodySectionWithMarginBottom extends React.Component {
    render() {
			return (
                <div className='bodySectionWithMargin'>
					<BodySection {...this.props} />
				</div>
			);
    }
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
}
