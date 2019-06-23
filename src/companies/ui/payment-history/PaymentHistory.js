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
  getDescription,
  getId
} from '@logistics-calc/companies/src/domain/models/Payment';

export default function PaymentHistory({ paymentHistory }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Date</TableCell>
          <TableCell align="center">Amount</TableCell>
          <TableCell align="center">Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {map(
          row => (
            <TableRow key={getId(row)}>
              <TableCell align="center">{getDate(row)}</TableCell>
              <TableCell align="center">{getAmount(row)}</TableCell>
              <TableCell align="center">{getDescription(row)}</TableCell>
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
