import { useEffect, useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentTable from "./components/StudentTable";
import { Student } from "./utils/data";
import { fetchStudents } from "./api/students";


function App() {
  const [students, setStudents] = useState<Student[]>([]);

  /* const getStudents = async () => {
    const data = await fetchStudents();
    setStudents(data);
  }; */

  useEffect(() => {
    fetchStudents().then((data) => setStudents(data)).catch((err) => alert(err));
  }, []);
  
  return (
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudents={setStudents} />
    </>
  );
}

export default App;
