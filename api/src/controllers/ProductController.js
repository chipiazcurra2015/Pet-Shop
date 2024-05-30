const {Product, Category, Review} = require ("../db");
const { Op, where } = require('sequelize');

const createProductController = async ( brand, description, kilogram, stock, price, image )=>{
        await Product.create({
            brand, description, kilogram, stock, price, image
        });

      return await Product.findAll();
    };

const getProductsByName = async (brand) => {

    const productsName = await Product.findAll({
        where:
        { brand:
        {[Op.iLike]:
        `%${brand}%`
    }}})

    return productsName;
};
    
const getAllProducts = async () => {
    const produc = await Product.findAll();
    return produc;
};

const getProductById = async (id) => {
    const productFilter = await Product.findAll({
      where: { id },
      include: Review, 
    });
  
    return productFilter;
  };

  const putProducts = async (id, editedData) => {
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        throw new Error('El producto no se encontró.');
      }
  
      if (editedData && typeof editedData === 'object') {
        product.kilogram = parseFloat(editedData.kilogram);
        product.stock = parseInt(editedData.stock);
        product.price = parseFloat(editedData.price);
      }
  
      await product.save();
  
      return product;
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error.message}`);
    }
  };

const deleteProducts = async(id) => await Product.destroy({where: {id}});


module.exports = {
    createProductController,
    getAllProducts,
    getProductsByName,
    deleteProducts,
    putProducts,
    getProductById
};