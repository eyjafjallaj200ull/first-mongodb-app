#!/usr/bin/env node

const database = require("../src/config/database");
const saveCounts = require("../src/services/db-operations/saveCounts");
const saveMaster = require("../src/services/db-operations/saveMaster");
const generateLocBarAmnt = require("../src/services/generate-reports/locBarAmnt");
const generateBarAmnt = require("../src/services/generate-reports/barAmnt");
const generateAggregate = require("../src/services/generate-reports/aggregate");

//first, call saveCounts, then saveMaster, they should be thenable, call one .then the other
//then generate the reports, again, they're asynchronous