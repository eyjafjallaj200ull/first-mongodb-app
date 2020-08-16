//fetch call counts, map array, save each item into database into a collection of countmodels
const {fetchCounts} = require("../../utils/api");
const CountModel = require("../../models/counts");

//document.save is asynchronous, calling it inside map will cause problems. I'd look into how to use Promise.all 
//or maybe there is a better solution
const saveCounts = fetchCounts().then(item => {
    item.map(item => {
        let document = new CountModel(item);
        document.save(err => {
            if(err) {
                console.log("Couldn't save count into the db", err);
            }
        })
    })
})

module.exports = saveCounts;