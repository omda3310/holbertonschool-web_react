import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList({ listCourses = [] }) {
	return (
		<table className={css(stl.table)}>
			<thead className={css(stl.tabhead)}>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody className={css(stl.tabbody)}>
				{
					listCourses.length === 0 ? (
						<CourseListRow isHeader={false} textFirstCell='No course available yet' />
					) : (
						listCourses.map((course) => (
							<CourseListRow
							    key={course.id}
							    textFirstCell={course.name}
								textSecondCell={course.credit}
								isHeader={false}
							/>
						))
					)
				}
			</tbody>
		</table>
	)
}

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

const stl = StyleSheet.create({
	table: {
		margintop: "20px",
		border: `1px, solid, gray`,
		bordercollapse: "collapse",
		width: "100%",
	},
	tabhead: {
		padding: "10px",
		border: `1px, solid, rgb(32, 16, 16)`,
		textAlign: "center",
		borderBottom: `none important`,
	
	},
	tabbody: {
		padding: "10px",
		border: `1px, solid, rgb(32, 16, 16)`,
		textalign: "center",
	},
	th: {
		textAlign: "left",
	}
});

export default CourseList;
