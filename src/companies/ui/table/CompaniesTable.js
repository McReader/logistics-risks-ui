import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import IconButton from "@material-ui/core/IconButton/index";
import Tooltip from "@material-ui/core/Tooltip/index";
import Fab from "@material-ui/core/Fab/index";
import Paper from '@material-ui/core/Paper/index';
import RefreshIcon from '@material-ui/icons/Refresh';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import { COMPANY_SHAPE } from '../constants';


const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
});

function CompaniesTable(props) {
  const { classes, companies } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company name</TableCell>
            <TableCell align="center">Risk</TableCell>
            <TableCell align="center">Last updated</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map(company => (
            <TableRow key={company.id}>
              <TableCell component="th" scope="row">
                {company.name}
              </TableCell>
              <TableCell align="center">{company.risk}%</TableCell>
              <TableCell align="center">{company.lastUpdated.toLocaleString()}</TableCell>
              <TableCell align="right">
                <Tooltip title="Recalculate">
                  <Link to={`/company/${company.id}`}>
                    <IconButton aria-label="Recalculate">
                      <EditIcon fontSize="small"/>
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Recalculate">
                  <IconButton aria-label="Recalculate">
                    <RefreshIcon fontSize="small"/>
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Fab
        className={classes.fab}
        color="primary"
      >
        <AddIcon />
      </Fab>
    </Paper>
  );
}

CompaniesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  companies: PropTypes.arrayOf(COMPANY_SHAPE),
};

CompaniesTable.defaultProps = {
  companies: [],
};

export default withStyles(styles)(CompaniesTable);
