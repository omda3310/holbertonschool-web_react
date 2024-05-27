import React from "react";
import PropTypes from "prop-types";

const bgRow = { backgroundColor: '#f5f5f5ab' };
const bgHeader = { backgroundColor: '#deb5b545'};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null}) {
  const bgStyle = isHeader ? bgHeader : bgRow;
  if(isHeader === true) {
    if(textSecondCell === null) {
      return(
        <tr style={bgHeader}>
          <th colSpan='2'>{textFirstCell}</th>
        </tr>
      )
    } else {
      return(
        <tr style={bgRow}>
          <th style={{textAlign: "left"}}>{textFirstCell}</th>
          <th style={{textAlign: "left"}}>{textSecondCell}</th>
        </tr>
      )
    }
  } else if (isHeader === false) {
    return(
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    )
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
