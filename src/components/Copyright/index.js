
import React from 'react'
import PropTypes from "prop-types";
import { Link, Typography } from '@mui/material';

const Copyright = ({name}) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          {name}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

Copyright.propTypes = {
    name: PropTypes.string.isRequired
};
  

export default Copyright