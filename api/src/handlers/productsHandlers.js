const getProductsHandler = (req, res) => {
    res.status(200).send("Estoy en producto");
}

const getProductHandler = (req, res) => {
    res.send("Estoy en producto");
}

const createProductHandler = (req, res)=> {
    res.send("Voy a crear un producto");
};

module.exports = {
    getProductHandler,
    getProductsHandler,
    createProductHandler
}