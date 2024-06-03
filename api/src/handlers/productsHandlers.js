const getProductsHandler = (req, res) => {
    res.status(200).send("Estoy en productos");
};

const getProductHandler = (req, res) => {
    res.send("Estoy en producto");
};

const createProductHandler = (req, res) => {
    res.send("Voy a crear un producto");
};

const deleteProductHandler = (req, res) => {
    res.send("Voy a eliminar un producto");
};

const putProductsHandler = (req, res) => {
    res.send("Voy a actualizar un producto");
};

const getProductByIdHandler = (req, res) => {
    res.send("Voy a obtener un producto por ID");
};

module.exports = {
    createProductHandler,
    getProductsHandler,
    getProductHandler,
    deleteProductHandler,
    putProductsHandler,
    getProductByIdHandler,
};