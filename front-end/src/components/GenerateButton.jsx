import React from 'react';

import '../common/GlobalStyles.css';
import IconButton from '@mui/material/IconButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const GenerateButton = () => {
  function getCode(description) {
    let response = fetch(
        `http://127.0.0.1:5000/helloWorld`
    ).then((response) => response.json()).then((responseJson) => {
      console.log(responseJson)
    });
  }

  return (
    <IconButton onClick={getCode} className="GenerateButton" aria-label="generate code" color="primary" size="large">
        <DoubleArrowIcon />
    </IconButton>
  );
}

export default GenerateButton;