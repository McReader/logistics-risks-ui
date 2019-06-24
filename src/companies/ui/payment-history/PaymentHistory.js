import React from 'react';
import PropTypes from 'prop-types';

import map from 'ramda/es/map';

import Table from '@material-ui/core/es/Table/Table';
import TableHead from '@material-ui/core/es/TableHead/TableHead';
import TableCell from '@material-ui/core/es/TableCell/TableCell';
import TableRow from '@material-ui/core/es/TableRow/TableRow';
import TableBody from '@material-ui/core/es/TableBody/TableBody';

import {
  getAmount,
  getDate,
  getPlannedDate,
  getId
} from '@logistics-calc/companies/src/domain/models/Payment';

export default function PaymentHistory({ paymentHistory }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Planned date</TableCell>
          <TableCell align="center">Actual date</TableCell>
          <TableCell align="center">Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {map(
          row => (
            <TableRow key={getId(row)}>
              <TableCell align="center">{getPlannedDate(row)}</TableCell>
              <TableCell align="center">{getDate(row)}</TableCell>
              <TableCell align="center">{getAmount(row)}</TableCell>
            </TableRow>
          ),
          paymentHistory
        )}
      </TableBody>
    </Table>
  );
}

PaymentHistory.propTypes = {
  paymentHistory: PropTypes.array
};

PaymentHistory.defaultProps = {
  paymentHistory: []
};
