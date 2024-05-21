import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
	return (
		<table>
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
			</thead>
			<tbody>
				{
					listCourses.length === 0 ? (
						<CourseListRow isHeader={false} textFirstCell='No course available yet' />
					) : (
						listCourses.map(course => (
							<CourseListRow
							    key={course.id}
								isHeader={false}
								textFirstCell={course.name}
								textSecondCell={course.credit.toString()}
							/>
						))
					)
				}
			</tbody>
		</table>
	)
}

CourseList.defaultProps = {
	listCourses : [],
};
CourseList.propTypes = {
	listCourses: propTypes.arrayOf(CourseShape),
};

export default CourseList;
