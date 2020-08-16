const fetch = require("node-fetch");
const url = require("../config/config").API;

const fetchCounts = fetch(`${url}/counts.json`)
.then(res => res.json())
.then(counts => counts)
.catch(err => console.log("Failed to fetch counts", err));

const fetchMaster = fetch(`${url}/master.json`)
.then(res => res.json())
.then(master => master)
.catch(err => console.log("Failed to fetch master", err))

module.exports = {
    fetchCounts,
    fetchMaster
}