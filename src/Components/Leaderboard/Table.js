import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import socket from "../../SocketConfig";
import { Green, Blue, LightestGrey, HeadingText } from "../../Styles/styles";

export default function TableComponent() {
  console.log("rendering the component");
  const [data, setData] = useState(null);
  const [newData, setNewData] = useState(null);
  useEffect(() => {
    const data = {
      clientId: "KJNDKJ234",
    };

    socket.on(
      "running-shift-data",
      (data) => {
        console.log(data);
        setData(data);
      },
      [socket]
    );

    // socket.emit('test-conn', "hello");
    // socket.emit('report-live-status', data);
    socket.emit("initial-connection-dashboard", data);

    socket.on("dashboard-update", (res) => {
      console.log(res);
      setData(res);
    });

    // socket.on("dashboard-update", (res) => {
    //   console.log(res);
    //   setNewData(res);
    //   setData((prevState) => {
    //     const temp = prevState;
    //     if (temp && newData) {
    //       temp.runningShift.employees.forEach((element) => {
    //         if (element["_id"] === newData.employeeId) {
    //           console.log("element", element);
    //           if (newData.detected) element.activeTime += 10;
    //           else element.awayTime += 10;
    //         }
    //       });
    //     }
    //     console.log(temp, prevState);
    //     return temp;
    //   });
    // });
  }, [newData]);

  return (
    <TableContainer
      component={Paper}
      sx={{ background: "transparent", boxShadow: "0" }}>
      {data ? (
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
              return (
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
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Green>
                      {moment.utc(row.activeTime * 1000).format("mm:ss")}m
                    </Green>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>
                      {moment.utc(row.awayTime * 1000).format("mm:ss")}m
                    </LightestGrey>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>
                      {moment.utc(row.idealTime * 1000).format("mm:ss")}m
                    </LightestGrey>
                  </TableCell>
                  <TableCell>
                    <LightestGrey>{row.kiloPicksProduced}</LightestGrey>
                  </TableCell>
                  <TableCell>
                    <Blue>{row.totalPoints}</Blue>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <HeadingText> No Data Available </HeadingText>
      )}
    </TableContainer>
  );
}
