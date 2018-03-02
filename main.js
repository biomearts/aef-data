// get JSON file ready to be read
const readline = require('readline')
const fs = require('fs')
var rl = readline.createInterface({
  input: fs.createReadStream('./data/entries-sample.json'),
  crlfDelay: Infinity
})
var lineCount = 0

// get Firebase ready
const firebase = require('firebase')
const config = require('./config/firebase')
firebase.initializeApp(config)
const db = firebase.database()

// Write to Firebase
// Set sample data
// db.ref('/hello').set('world')

// DANGER: Reset everything
// db.ref('/sources').set(null)

// Add all data from JSON file to database
/*
rl.on('line', (line) => {
  var data = JSON.parse(line.replace('$oid', 'oid'))
  var source = data.source.toLowerCase()
  data.source = source
  db.ref('/sources').child(source).push(data)
  lineCount += 1

  console.log(lineCount, source)
})
*/

// Read to firebase
// Read sample data
db.ref('/hello').once('value').then((snapshot) => {
  console.log(snapshot.val())
})
