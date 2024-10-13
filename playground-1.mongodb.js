/* global use, db */
// MongoDB Playground
<<<<<<< HEAD

// Select the database to use.
use('NotesAppDB');

// Clear existing data from the notes collection
db.notes.drop();

// Insert sample notes into the notes collection.
db.notes.insertMany([
  {
    'user_id': 'user1',
    'title': 'Introduction to Python',
    'content': 'Python is a high-level, interpreted programming language. It\'s known for its simplicity and readability.',
    'folder': 'Programming',
    'tags': ['python', 'programming'],
    'date_created': new Date('2023-10-15T10:00:00Z'),
    'date_modified': new Date('2023-10-15T10:00:00Z')
  },
  {
    'user_id': 'user1',
    'title': 'Machine Learning Basics',
    'content': 'Machine Learning is a subset of AI that focuses on the development of algorithms that can learn from and make predictions or decisions based on data.',
    'folder': 'AI',
    'tags': ['machine learning', 'AI'],
    'date_created': new Date('2023-10-16T14:30:00Z'),
    'date_modified': new Date('2023-10-16T14:30:00Z')
  },
  {
    'user_id': 'user2',
    'title': 'World War II Overview',
    'content': 'World War II was a global war that lasted from 1939 to 1945, involving many of the world\'s nations.',
    'folder': 'History',
    'tags': ['history', 'war'],
    'date_created': new Date('2023-10-17T09:15:00Z'),
    'date_modified': new Date('2023-10-17T09:15:00Z')
  },
  {
    'user_id': 'user2',
    'title': 'Photosynthesis Process',
    'content': 'Photosynthesis is the process by which plants use sunlight, water and carbon dioxide to produce oxygen and energy in the form of sugar.',
    'folder': 'Biology',
    'tags': ['biology', 'plants'],
    'date_created': new Date('2023-10-18T11:45:00Z'),
    'date_modified': new Date('2023-10-18T11:45:00Z')
  },
  {
    'user_id': 'user3',
    'title': 'JavaScript Promises',
    'content': 'Promises in JavaScript represent the eventual completion or failure of an asynchronous operation and its resulting value.',
    'folder': 'Programming',
    'tags': ['javascript', 'programming'],
    'date_created': new Date('2023-10-19T16:20:00Z'),
    'date_modified': new Date('2023-10-19T16:20:00Z')
  }
]);

// Print a message to the output window showing the number of inserted notes.
print(`${db.notes.count()} notes have been inserted.`);

// Run a query to view all notes
const allNotes = db.notes.find();

console.log(`${db.getCollection('notes').count()} notes have been inserted.`);
print(`${db.notes.count()} notes have been inserted.`);
print('All notes:');
allNotes.forEach(printjson);
const allNotes = db.getCollection('notes').find({});
const allNotes = db.notes.find();
// Run an aggregation to get the count of notes per folder
const notesByFolder = db.notes.aggregate([
console.log('All notes:');
print('All notes:');
]);

print('Notes count by folder:');
const notesByFolder = db.getCollection('notes').aggregate([
const notesByFolder = db.notes.aggregate([

// Find notes for a specific user (user1)
const user1Notes = db.notes.find({ user_id: 'user1' });
print('Notes count by folder:');
print('Notes for user1:');
user1Notes.forEach(printjson);

// Search for notes containing a specific keyword (e.g., "Python")
const pythonNotes = db.notes.find({
  $or: [
    { title: { $regex: 'Python', $options: 'i' } },
    { content: { $regex: 'Python', $options: 'i' } },
    { tags: 'python' }
  ]
});

print('Notes related to Python:');
pythonNotes.forEach(printjson);

// Get the most recent note
const mostRecentNote = db.notes.find().sort({ date_modified: -1 }).limit(1);

print('Most recent note:');
mostRecentNote.forEach(printjson);

// Count notes per user
const notesByUser = db.notes.aggregate([
  { $group: { _id: '$user_id', count: { $sum: 1 } } }
]);

print('Notes count by user:');
notesByUser.forEach(printjson);
=======
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
>>>>>>> b8fd680d50c377cc2947af9199933fff53051b7f
