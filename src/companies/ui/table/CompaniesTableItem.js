import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import RefreshIcon from '@material-ui/icons/Refresh';
import EditIcon from '@material-ui/icons/Edit';

import formatDate from '@logistics-calc/date-utils/src/formatDate';

import isHighRisk from '@logistics-calc/risks/src/domain/services/isHighRisk';
import { getValue } from '@logistics-calc/risks/src/domain/models/Risk';

import {
  getFoundationDate,
  getId,
  getName
} from '@logistics-calc/companies/src/domain/models/Company';

import Permit from '../../../priveleges/Permit';

function CompaniesTableItem(props) {
  const { company, onRecalculate, risk } = props;
  const companyId = getId(company);
  return (
    <TableRow>
      <TableCell>{getName(company)}</TableCell>
      <TableCell
        align="center"
        style={{
          backgroundColor: risk ? (isHighRisk(risk) ? 'red' : 'green') : null
        }}
      >
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
        <Permit>
          <Tooltip title="Recalculate">
            <IconButton
              aria-label="Recalculate"
              onClick={() => onRecalculate(companyId)}
            >
              <RefreshIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Permit>
      </TableCell>
    </TableRow>
  );
}

export default CompaniesTableItem;
