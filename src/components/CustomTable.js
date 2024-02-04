import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { formatIndianRupees } from "../utils";

let theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataTable({ data }) {
  const classes = useStyles();

  const columns = ["Buy Target", "Sell Target", "Resistance", "Support"];
  const rows = data.buyTarget.map((_, index) => ({
    buyTarget: data.buyTarget[index],
    sellTarget: data.sellTarget[index],
    resistance: data.resistance[index],
    support: data.support[index],
  }));

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{formatIndianRupees(row.buyTarget)}</TableCell>
                <TableCell>{formatIndianRupees(row.sellTarget)}</TableCell>
                <TableCell>{formatIndianRupees(row.resistance)}</TableCell>
                <TableCell>{formatIndianRupees(row.support)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
