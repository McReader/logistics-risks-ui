import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Table from '@material-ui/core/Table/index';
import TableBody from '@material-ui/core/TableBody/index';
import TableCell from '@material-ui/core/TableCell/index';
import TableHead from '@material-ui/core/TableHead/index';
import TableRow from '@material-ui/core/TableRow/index';
import Fab from '@material-ui/core/Fab/index';
import Paper from '@material-ui/core/Paper/index';
import AddIcon from '@material-ui/icons/Add';

import { getId } from '@logistics-calc/companies/src/domain/models/Company';

import { getByCompanyId } from '@logistics-calc/risks/src/domain/models/RisksCollection';

import Permit from '../../../priveleges/Permit';

import { COMPANY_SHAPE } from '../constants';
import CompaniesTableItem from './CompaniesTableItem';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  }
});

function CompaniesTable(props) {
  const { classes, companies, onAddButtonClick, onRecalculate, risks } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company name</TableCell>
            <TableCell align="center">Risk</TableCell>
            <TableCell align="center">Foundation date</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map(company => {
            const companyId = getId(company);
            return (
              <CompaniesTableItem
                company={company}
                key={companyId}
                onRecalculate={onRecalculate}
                risk={getByCompanyId(companyId, risks)}
              />
            );
          })}
        </TableBody>
      </Table>
      <Permit>
        <Fab className={classes.fab} color="primary" onClick={onAddButtonClick}>
          <AddIcon />
        </Fab>
      </Permit>
    </Paper>
  );
}

CompaniesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  companies: PropTypes.arrayOf(COMPANY_SHAPE),
  onAddButtonClick: PropTypes.func,
  onRecalculate: PropTypes.func,
  risks: PropTypes.array
};

CompaniesTable.defaultProps = {
  companies: [],
  risks: []
};

export default withStyles(styles)(CompaniesTable);
