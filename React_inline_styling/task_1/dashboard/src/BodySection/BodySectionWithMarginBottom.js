import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';
import { PropTypes } from 'prop-types';

export default class BodySectionWithMarginBottom extends React.Component {
    render() {
			return (
                <div className={css(stl.bodySectionWithMargin)}>
					<BodySection {...this.props} />
				</div>
			);
    }
}

const stl = StyleSheet.create({
	bodySectionWithMargin: {
		marginbottom: "40px",
	}
});

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
}
