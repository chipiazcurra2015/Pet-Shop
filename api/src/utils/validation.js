function hasEmptyField(object){
    // que no haya campos vacios y trimear toda la información
    const data = Object.values(object);
    return data.some((item) => !item.trim().length)
}
module.exports = hasEmptyField;