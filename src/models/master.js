const {Schema, model} = require('mongoose'); 

const masterSchema = new Schema({
    "barcode": String,
    "sku": String,
    "urun adi": String
})

module.exports = model("MasterModel", masterSchema);