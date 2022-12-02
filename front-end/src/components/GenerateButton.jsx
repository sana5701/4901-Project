import React from 'react';

import '../common/GlobalStyles.css';
import IconButton from '@mui/material/IconButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const GenerateButton = () => {
  return (
    <IconButton className="GenerateButton" aria-label="generate code" color="primary" size="large">
        <DoubleArrowIcon />
    </IconButton>
  );
}

export default GenerateButton;