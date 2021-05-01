// Import the methods
const {getAll, getById, removeById, save, update} = require('../dal/product.dao');

// Map the save() method
const createProduct = async ({name, description, category, brand, sku, price, qty, img}) => {
    // Create a product object
    const product = {name, description, category, brand, sku, price, qty, img};

    // Call the save product method and pass the object
    return await save(product);
}

// Map the getAll() method
const getProducts = async () => {
    return await getAll();
}

// Map the getById() method
const getProduct = async id => {
    return await getById(id);
}

// Map the removeById() method
const deleteProduct = async id => {
    return await removeById(id);
}

// Map the update() method
const updateProduct = async (id, {name, description, category, brand, sku, price, qty, img}) => {
    // Create a product object
    const product = {name, description, category, brand, sku, price, qty, img};

    // Call the update product method and pass the object
    return await update(id, product);
}

// Export the methods
module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
};