import express from 'express'
import mongoose from 'mongoose'
import { studentModel } from '../models/student'
 
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await studentModel.find()
        res.send(students)
    } catch (error) {
        res.status(500).send("error found");
    }

});
router.get('/:id', async (req, res) => {
    const student = await studentModel.findById(req.params.id)
    if (!student) {
        res.status(404).send('No student found')
    }
    res.send(student)
});

router.post('/', async (req, res) => {
    try {
        const student = new studentModel(req.body)
        await student.save()
        res.status(201).send(student)
    } catch (err:any) {
        res.status(500).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const student = await studentModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!student) {
          res.status(404).send('No student found')
    } 
        res.send(student)
        
});

router.delete('/:id', async (req, res) => {
    const student = await studentModel.findByIdAndDelete(req.params.id)
    if (!student){
        res.status(404).send('Not student found')
    } 
        res.send("ok")
    
});


export default router;