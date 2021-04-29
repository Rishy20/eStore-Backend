//Import the methods
const {getAll, getById, removeById, save, update} = require('../dal/seller.dao');
//Require bcrypt
const bcrypt = require('bcrypt');
//Map the save() method
const createSeller = async ({fname,lname,email,password,businessName,contact,address,city,state,zipcode,country}) => {

    //Encrypt the password
    password = await bcrypt.hash(password,5);
    //Create a Seller object
    const seller = {
        fname,
        lname,
        email,
        password,
        businessName,
        contact,
        address,
        city,
        state,
        zipcode,
        country
    }
    //Call the Save method and pass the Seller object

    return await save(seller);
}
//Map the getAll() method
const getSellers = async ()=>{
    return await getAll();
}
//Map the getById() method
const getSeller = async id =>{
    return await getById(id);
}
//Map the removeById() method
const deleteSeller = async id =>{
    return await removeById(id);
}
//Map the update method
const updateSeller = async (id,{fname,lname,email,password,businessName,contact,address,city,state,zipcode,country})=>{

    //Create a Seller object
    const seller = {
        fname,
        lname,
        email,
        password,
        businessName,
        contact,
        address,
        city,
        state,
        zipcode,
        country
    }
    return await update(id,seller);
}
//Export the methods to be used in routes
module.exports = {
    createSeller,
    getSellers,
    getSeller,
    deleteSeller,
    updateSeller
}
