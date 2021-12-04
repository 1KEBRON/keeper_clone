import React from 'react';

function Footer(){
      let currentYear = new Date().getFullYear()
      return <footer><p>Copyright Kebron S. Zerie © {currentYear} </p></footer> 
}

export default Footer