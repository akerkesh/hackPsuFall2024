/* global use, db */
// MongoDB Playground

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
