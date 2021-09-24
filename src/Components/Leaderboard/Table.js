import React from "react";
import { data } from "./data.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Green, Blue, LightestGrey } from "../../Styles/styles";

export default function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow
            sx={{
              th: { textAlign: "center" },
              background: "var(--blue-light)",
              color: "var(--grey)",
            }}>
            <TableCell>StationID</TableCell>
            <TableCell>WorkerID/Name</TableCell>
            <TableCell>Active&nbsp;Mins</TableCell>
            <TableCell>Away&nbsp;Mins</TableCell>
            <TableCell>Ideal&nbsp;Mins</TableCell>
            <TableCell>Kilopicks&nbsp;Produced</TableCell>
            <TableCell>Total&nbsp;Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.stationID}
              sx={{
                "td, th": {
                  border: 0,
                },
                td: { textAlign: "center" },
                background: "var(--grey-light)",
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
              }}>
              <TableCell>{row.stationID}</TableCell>
              <TableCell>{row.workerName}</TableCell>
              <TableCell>
                <Green>{row.activeMins}m</Green>
              </TableCell>
              <TableCell>
                <LightestGrey>{row.awayMins}m</LightestGrey>
              </TableCell>
              <TableCell>
                <LightestGrey>{row.idealMins}m</LightestGrey>
              </TableCell>
              <TableCell>
                <LightestGrey>{row.kiloPicksProduced}</LightestGrey>
              </TableCell>
              <TableCell>
                <Blue>{row.totalPoints}</Blue>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
