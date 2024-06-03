 const axios = require ("axios");
 const mysql = require('mysql2/promise');
 require("dotenv").config();

 const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  });


 const createProductController = async (brand, stocks, price, image) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
  
      // Insertar el nuevo producto en la base de datos
      const [result] = await connection.query('INSERT INTO products (brand, stocks, price, image) VALUES (?, ?, ?, ?)', [brand, stocks, price, image]);
      const newProductId = result.insertId;
  
      await connection.commit();
  
      return { id: newProductId, brand, stocks, price, image };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  };

  module.exports ={
    createProductController,
  }