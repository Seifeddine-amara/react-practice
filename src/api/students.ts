import { Student } from "../utils/data";
const BASE_URL = 'http://localhost:3000/students';

export const fetchStudents = async () => {
    try {
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }
        
        return await response.json();
    } catch (err) {
        if (err instanceof Error) {
            console.error("Error fetching students:", err.message);
        } else {
            console.error("Error fetching students:", err);
        }
        throw err; // Re-throw to handle it in the calling function
    }
};


export const addStudent = async (student: Student) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
       
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }
        return await response.json();;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

