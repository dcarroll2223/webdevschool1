import { pool } from '../db.js';

export const getStudents = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students');
    res.send(rows);
  } catch (error) {
    return res.status(500).send({
      message: 'Error in DB',
    });
  }
};

export const createStudents = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const [rows] = await pool.query(
      'INSERT INTO students(firstName, lastName) VALUES (?, ?)',
      [firstName, lastName]
    );
    res.send({ id: rows.Inserted, firstName, lastName });
  } catch (error) {
    return res.status(500).send({ message: 'Error in DB' });
  }
};

export const updateStudents = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE students set firstName = IFNULL(?, firstName), lastName = IFNULL(?, lastName)  WHERE id = ?',
      [firstName, lastName, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).send({ message: 'Employee not found' });
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [
      id,
    ]);
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).send({ message: 'Error in DB' });
  }
};

export const deleteStudents = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM students WHERE id = ?', [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).send({ message: 'Employee not found' });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).send({
      message: 'Error in DB',
    });
  }
};
