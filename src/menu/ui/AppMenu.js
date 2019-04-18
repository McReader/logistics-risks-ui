import React, { useState } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import List from "@material-ui/core/List/index";
import ListItem from "@material-ui/core/ListItem/index";
import Drawer from "@material-ui/core/Drawer/index";
import withStyles from "@material-ui/core/styles/withStyles";

import logout from "../../auth/domain/services/logout";

import AppMenuContext from './AppMenuContext';


const styles = {
  list: {
    width: '250px',
  },
};

function AppMenu({ classes, children, history }) {
  const [isOpened, setIsOpened] = useState(false);

  const openMenu = () => {
    setIsOpened(true);
  };

  const onLogoutClick = () => {
    logout();
    history.replace({ pathname: '/login' });
  };

  return (
    <AppMenuContext.Provider
      value={{
        openMenu,
      }}
    >
      <Drawer
        open={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <List className={classes.list}>
          <ListItem button onClick={onLogoutClick}>
            Logout
          </ListItem>
        </List>
      </Drawer>
      { children }
    </AppMenuContext.Provider>
  )
}


AppMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogout: PropTypes.func,
  open: PropTypes.bool,
};

AppMenu.defaultProps = {
  open: false,
};

export default withRouter(withStyles(styles)(AppMenu));
