import React from "react";
import propTypes from "prop-types";

const bgRow = { backgroundColor: '#f5f5f5ab' };
const bgHeader = { backgroundColor: '#deb5b545'};

function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
  const bgStyle = isHeader ? bgHeader : bgRow;
  if(isHeader === true) {
    if(textSecondCell === null) {
      return(
        <tr style={bgStyle}>
          <th colSpan='2'>{textFirstCell}</th>
        </tr>
      )
    } else {
      return(
        <tr style={bgStyle}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      )
    }
  } else if (isHeader === false) {
    return(
      <tr style={bgStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    )
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default CourseListRow;
