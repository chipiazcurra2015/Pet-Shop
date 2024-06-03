const{createProductController} = require ("../controllers/productscontrolers")

const getProductsHandler = (req, res) => {
    res.status(200).send("Estoy en producto");
}
const createProductHandler = async (req, res)=> {
    try {
        const {brand,
            stocks,
            price,
            image,
        } = req.body
        const response = await createProductController(
            brand,
            stocks,
            price,
            image,
            );
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({error:error.message})
        }
};

const getProductHandler = (req, res) => {
    res.send("Estoy en producto");
}


module.exports = {
    getProductHandler,
    getProductsHandler,
    createProductHandler
}