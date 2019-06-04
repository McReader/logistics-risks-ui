import React from 'react';
import { withStyles } from '@material-ui/styles';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import RefreshIcon from '@material-ui/icons/Refresh';
import EditIcon from '@material-ui/icons/Edit';

import formatDate from '../../../shared/date/formatDate';
import isHighRisk from '../../../risks/domain/services/isHighRisk';
import { getValue } from '../../../risks/domain/models/Risk';

import { getFoundationDate, getId, getName } from '../../domain/models/Company';

const styles = {
  tableCellRisk: {
    backgroundColor: ({ risk }) => {
      if (!risk) {
        return null;
      }

      return isHighRisk(risk) ? 'red' : 'green';
    }
  }
};

function CompaniesTableItem({ classes, company, onRecalculate, risk }) {
  const companyId = getId(company);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {getName(company)}
      </TableCell>
      <TableCell align="center" classes={{ root: classes.tableCellRisk }}>
        {risk ? `${getValue(risk)}%` : '-'}
      </TableCell>
      <TableCell align="center">
        {formatDate(getFoundationDate(company))}
      </TableCell>
      <TableCell align="right">
        <Tooltip title="Edit">
          <Link to={`/company/${getId(company)}`}>
            <IconButton aria-label="Recalculate">
              <EditIcon fontSize="small" />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Recalculate">
          <IconButton
            aria-label="Recalculate"
            onClick={() => onRecalculate(companyId)}
          >
            <RefreshIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(CompaniesTableItem);
