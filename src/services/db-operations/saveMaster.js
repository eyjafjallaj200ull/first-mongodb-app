//fetch call master, map array, save each item into database into a collection of mastermodels

const {fetchMaster} = require("../../utils/api");
const MasterModel = require("../../models/master");

//document.save is asynchronous, calling it inside map will cause problems. I'd look into how to use Promise.all 
//or maybe there is a better solution
const saveMaster = fetchMaster().then(item => {
    item.map(item => {
        let document = new MasterModel(item);
        document.save(err => {
            if(err) {
                console.log("Couldn't save count into the db", err);
            }
        })
    })
})

module.exports = saveMaster;