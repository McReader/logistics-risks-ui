import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  buttonIconLeft: {
    marginRight: theme.spacing.unit,
  }
});

function SimpleAppBar(props) {
  const { classes, title } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
};

SimpleAppBar.defaultProps = {
  title: 'Logistics Risks Calculator',
};

export default withStyles(styles)(SimpleAppBar);
