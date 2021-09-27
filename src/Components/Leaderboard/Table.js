import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from 'moment';
import { Green, Blue, LightestGrey } from "../../Styles/styles";

export default function TableComponent(props) {
  const { data } = props;

  return (
    <TableContainer
      component={Paper}
      sx={{ background: "transparent", boxShadow: "0" }}>
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
          {data.runningShift.employees.map((row) => {    
            // row.activeTime = moment({}).seconds(row.activeTime).format("mm:ss")        
            return(            
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
                <TableCell>{row.stationId}</TableCell>
                <TableCell>{row.workerName}</TableCell>
                <TableCell>
                  <Green>{moment.utc(row.activeTime*1000).format("mm:ss")}m</Green>
                </TableCell>
                <TableCell>
                  <LightestGrey>{moment.utc(row.awayTime*1000).format("mm:ss")}m</LightestGrey>
                </TableCell>
                <TableCell>
                  <LightestGrey>{moment.utc(row.idealTime*1000).format("mm:ss")}m</LightestGrey>
                </TableCell>
                <TableCell>
                  <LightestGrey>{row.kiloPicksProduced}</LightestGrey>
                </TableCell>
                <TableCell>
                  <Blue>{row.totalPoints}</Blue>
                </TableCell>
              </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  )};

