import pool from "../config/db.js";

export const getAllUserService = async () =>{
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    console.error('Error fetching users', error.message);
    throw error;
  }
}

export const getUserByIdService = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error fetching user by id', error.message);
    throw error;
  }
}

export const addUserService = async (user) => {
  try {
    const { name, email, password } = user;
    const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
    return result.rows[0];
  } catch (error) {
    console.error('Error adding user', error.message);
    throw error;
  }
}

export const updateUserService = async (id, updatedUser) => {
  try {
    const { name, email, password } = updatedUser;
    const result = await pool.query('UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4 RETURNING *', [name, email, password, id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating user by id', error.message);
    throw error;
  }
}

export const deleteUserService = async (id) => {
  try {
    const result = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting user by id', error.message);
    throw error;
  }
}