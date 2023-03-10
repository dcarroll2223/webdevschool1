import express from 'express';
import {
  createStudents,
  deleteStudents,
  getStudents,
  updateStudents,
} from '../controllers/studentControllers.js';

const studentRouter = express.Router();

studentRouter.get('/students', getStudents);

studentRouter.post('/students', createStudents);

studentRouter.put('/students/:id', updateStudents);

studentRouter.delete('/students/:id', deleteStudents);

export default studentRouter;
