const {Schema, model} = require('mongoose'); 

const countSchema = new Schema({
    id: Number,
    locationCode: String,
    completedCounts: [
        {
            totalAmount: Number,
            contents: [
                {
                    barcode: String,
                    amount: Number
                }
            ]
        }
    ]
});

module.exports = model("CountModel", countSchema);