import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonSchool from '../assets/HolbertonSchool.jpg';

function Header() {
  return (
      <div className={css(stl.Apphd)}>
        <img src={HolbertonSchool} className={css(stl.Applogo)} alt="logo" />
        <h1> School dashboard </h1>
      </div>
  );
}

const stl = StyleSheet.create({
  Apphd: {
    display: "flex",
    alignitems: "center",
    color: "#e0003c",
  },
  Applogo: {
    height: "140px",
  },
});

export default Header;
