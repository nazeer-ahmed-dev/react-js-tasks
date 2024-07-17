import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase({ inputValue, onInputChange }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
     
     <InputBase
        className={classes.input}
        placeholder="Github user name ..."
        inputProps={{ 'aria-label': 'search github profile' }}
        value={inputValue}
        onChange={onInputChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
  );
}

CustomizedInputBase.defaultProps = {
    inputValue: "",
    onInputChange: () => {},
  };
  
  CustomizedInputBase.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired, 
  };