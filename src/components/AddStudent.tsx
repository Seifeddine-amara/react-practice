import { Button, Paper, TextField } from "@mui/material";
import { Student } from "../utils/data";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { addStudent } from "../api/students";

interface props {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>>;
}

function AddStudent({ setStudents, students }: props) {
  const [formData, setFormData] = useState({
    id: 999,
    firstName: "",
    lastName: "",
    email: "",
    classDegree: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    const { firstName, lastName, email, classDegree } = formData;

    // Validate that all fields are filled
    if (firstName && lastName && email && classDegree) {
      const newId = students.length + 1;
      const newStudent = {
        ...formData,
        id: newId,
      };

      //call the endpoint
      const data = await addStudent(newStudent);

      // Add the new student to the students array
      setStudents((prevStudents) => [...prevStudents, data]);

      // Reset formData to clear the input fields
      setFormData({
        id: 999,
        firstName: "",
        lastName: "",
        email: "",
        classDegree: "",
      });
    } else {
      alert("Please fill out all fields!");
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.classDegree;

  useEffect(() => {
    if (formData.firstName === "admin" || formData.lastName === "admin")
      alert("This name is not allowed to be used");
  }, [formData.firstName, formData.lastName]);
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh", // Full viewport height
    }}
  >
    <Paper
      sx={{
        width: 300,
        padding: 5,
        marginTop: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="First Name"
        name="firstName"
        variant="outlined"
        value={formData.firstName}
      />
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Last Name"
        name="lastName"
        variant="outlined"
        value={formData.lastName}
      />
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
        value={formData.email}
      />
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Calss Degree"
        name="classDegree"
        variant="outlined"
        value={formData.classDegree}
      />
      <Button onClick={handleClick} variant="contained" disabled={!isFormValid}>
        SUBMIT
      </Button>
    </Paper>
    </div>
  );
}

export default AddStudent;
