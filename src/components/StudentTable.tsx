import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import { Student } from "../utils/data";
import { useEffect } from "react";

interface props {
  students: Student[];
}

function StudentTable(props: props) {
  useEffect(() => {
    if (props.students.length === 20) {
      alert("Max limit reached!");
    }
  }, [props.students]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          fontSize: "20px",
        }}
      >
        Student Table
      </div>
      <div>
        <TableContainer component={Paper} sx={{ width: 600, marginLeft: "20px" }}>
          <Table size="small" sx={{ border: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">email</TableCell>
                <TableCell align="center">class degree</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.students.map((item , index) => {
                return (
                  <TableRow key={item.id || index}>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.classDegree}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default StudentTable;
