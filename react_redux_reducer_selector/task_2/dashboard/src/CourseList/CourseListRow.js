import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const bgRow = { backgroundColor: '#f5f5f5ab' };
const bgHeader = { backgroundColor: '#deb5b545'};

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null}) {
  const bgStyle = isHeader ? bgHeader : bgRow;
  const [checked, setChecked] = React.useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  if(isHeader === true) {
    if(textSecondCell === null) {
      return(
        <tr style={bgStyle}>
          <th colSpan='2' className={css(stl.ThSpan)}>{textFirstCell}</th>
        </tr>
      )
    } else {
      return(
        <tr style={bgRow}>
          <th className={css(stl.Th)}>{textFirstCell}</th>
          <th className={css(stl.Th)}>{textSecondCell}</th>
        </tr>
      )
    }
  } else if (isHeader === false) {
    return(
      <tr className={css(stl.Td)} >
        <td>
          <input type="checkbox" checked={checked} onChange={handleChecked}></input>
          {textFirstCell}
        </td>
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

const stl = StyleSheet.create({
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
  Th: {
    borderBottom: `1px, solid, grey`,
    textAlign: "left",
  },
  ThSpan: {
    textAlign: "center",
  },
  Td: {
    textAlign: "left",
  }
})

export default CourseListRow;
