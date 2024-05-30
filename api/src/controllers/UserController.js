const { User } = require ("../db");
const { Op, where } = require('sequelize');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET="mi frase secreta";
const validaCampos = require('../utils/validation');
require('dotenv').config();

const loginUserController = async (email, password) => {
		// if (validaCampos(email, userPassword)) throw new Error('Campos vacios')
		const user =await User.findOne({email});
		if(!user || !bcryptjs.compareSync(password, user.password)) throw new Error('Credenciales incorrectas');
		const payload = { _id: user.id, email, firstname: user.firstname, lastname: user.lastname }
		const token = jwt.sign(payload, process.env.JWT_SECRET);
		return {token, ...payload}; 
  };

const createUserController = async (firstname, lastname, email, password ) => {
	salt = Number(process.env.SALT);
	password = bcryptjs.hashSync(password, salt);
	const newUser = await User.create({ firstname, lastname, email, password });

	return newUser;
};

const deleteUserController = async (id) => await User.destroy({where: {id}});

const getAllUserControllers = async () => {
	const allUserDb = await User.findAll();
	return allUserDb;
};

const putUserController = async (id, editedData ) => {
	try {
		const user = await User.findByPk(id);

		if (!user) {
			throw new Error('El Usuario no se encontró.');
		}

        if (editedData && typeof editedData === 'object') {
            user.firstname = editedData.firstname;
            user.lastname = editedData.lastname;
          }

		await user.save();

		return user;
	} catch (error) {
		throw new Error(`Error al actualizar el Usuario: ${error.message}`);
	}
};

const getUserByIdController = async (id) => {
	const USerFilter = await User.findAll({ where: { id }});
	return USerFilter;
};

module.exports = {
	loginUserController,
	createUserController,
	deleteUserController,
	getAllUserControllers,
	putUserController,
	getUserByIdController,
};