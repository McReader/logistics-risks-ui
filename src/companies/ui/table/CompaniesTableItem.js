import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import TableRow from "@material-ui/core/TableRow";
import RefreshIcon from "@material-ui/icons/Refresh";
import EditIcon from '@material-ui/icons/Edit';

import formatDate from "../../../shared/date/formatDate";

import { getFoundationDate, getId, getName } from "../../domain/models/Company";


export default function CompaniesTableItem({ company, onRecalculate, risk }) {
  const companyId = getId(company);
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {getName(company)}
      </TableCell>
      <TableCell align="center">{ risk ? `${risk.value}%` : '-' }</TableCell>
      <TableCell align="center">{formatDate(getFoundationDate(company))}</TableCell>
      <TableCell align="right">
        <Tooltip title="Edit">
          <Link to={`/company/${getId(company)}`}>
            <IconButton aria-label="Recalculate">
              <EditIcon fontSize="small"/>
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Recalculate">
          <IconButton aria-label="Recalculate" onClick={() => onRecalculate(companyId)}>
            <RefreshIcon fontSize="small"/>
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
