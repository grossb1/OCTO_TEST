/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

const {
  courses, authors, allSets, roles,
} = mockData;
const data = JSON.stringify({
  courses, authors, allSets, roles,
});
const filepath = path.join(__dirname, 'db.json');

// eslint-disable-next-line prefer-arrow-callback
fs.writeFile(filepath, data, function createMockDB(err) {
  // eslint-disable-next-line no-unused-expressions
  err ? console.log(err) : console.log('Mock DB created.');
});
