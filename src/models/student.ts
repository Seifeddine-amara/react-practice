import mongoose,{Schema, Document} from "mongoose";

interface IStudent extends Document {
    firstName: string;   
    lastName: string;   
    email: string;
    classDegree: string;
}

const studentSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String},
    classDegree: {type: String}
});

export const studentModel = mongoose.model<IStudent>('students', studentSchema);