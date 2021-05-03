// Import Koa Router
const Router = require('@koa/router');
// Import the API methods
const {createProduct, getProducts, getProduct, deleteProduct, updateProduct} = require('../api/product.api');


// Create router object
const router = new Router({
    prefix: '/api/v1/products'
});

// Get all products route
router.get('/', async ctx => {
    ctx.body = await getProducts();
});

// Add a product route
router.post('/', async ctx => {
    let product = ctx.request.body;
    product = await createProduct(product);
    ctx.response.status = 200;
    ctx.body = product;
});

// Get product by ID route
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getProduct(id);
});

// Delete product by ID route
router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await deleteProduct(id);
});

// Update product route
router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let product = ctx.request.body;
    product = await updateProduct(id, product);
    ctx.response.status = 200;
    ctx.body = product;
});

// Export the routes
module.exports = router;