use("KEC-CRUD");

//?update on array

//? $push

//? add 92 on marks of Rajan

// db.scores.updateMany(
//   {
//     name: "Rajan",
//   },
//   {
//     $push: {
//       Marks: 92,
//     },
//   }
// );

//? add 87 and 93 to marks of Suyasha
// db.scores.updateOne(
//   {
//     name: "Smarika",
//   },
//   {
//     $push: {
//       Marks: { $each: [87, 93] },

//       //! $each operator inserts one value at a time of a array in a array
//     },
//   }
// );
// db.scores.find();

//? pop
//? 1 => removes item from from the end of the array
//? -1> remove item from the beginning of the array

// db.scores.updateMany(
//   {
//     name: "Suyasha",
//   },
//   {
//     $pop: {
//       Marks: 1,
//     },
//   }
// );

//? $pull => removes item based upon condition

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       Marks: { $lt: 70 },
//     },
//   }
// );

//?

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );
// db.scores.find();

//? update subject of suyasha science -> maths

// db.scores.updateOne(
//   {
//     name: "Suyasha",
//     "points.sub": "Science",
//   },
//   {
//     $set: {
//       "points.$.sub": "Maths",
//     },
//   }
// );

// db.scores.find();

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $pull: {
//       points: { sub: "Science" },
//       Marks: { $lt: 88 },
//     },
//   }
// );
// db.scores.find();

//? pullall -> to give concrete value which needs to be removed

// db.scores.updateOne(
//   {
//     _id: new ObjectId("668299e919a9fbdc6e45daf1"),
//   },
//   {
//     $pullAll: {
//       Marks: [42, 65],
//     },
//   }
// );
// db.scores.find();

//? push 78,67,83 to marks array of Rajan

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//! have run this twice so twice in data set
//     $push: {
//       Marks: { $each: [78, 67, 83] },
//     },
//   }
// );
// db.scores.find();

//? $addToSet
//! addToSet pushes only the value that is not present in the array
//! the pre existent data are not pushed in the array
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       Marks: { $each: [88, 67, 92, 100, 10] },
//     },
//   }
// );
// db.scores.find();

//?>>>>>>>>>>>>.............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//! also works on object level

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       points: { sub: "Social", point: 88 },
//     },
//   }
// );
// db.scores.find();

//? question practice

//? push an object with sub Science and point 92  on Suyasha points

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       points: { sub: "Science", point: 92 },
//     },
//   }
// );
// db.scores.find();

//? push 57 ,88,96, on Suyasha's marks such that no value is duplicated

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $addToSet: {
//       Marks: { $each: [57, 88, 96] },
//     },
//   }
// );
// db.scores.find();

//?change Rajan's lucky color to "Orange"

// db.scores.updateMany(
//   { name: "Rajan" },
//   {
//     $set: {
//       "luckyThings.color": "Orange",
//     },
//   }
// );
// db.scores.find();

//? pull last item from Rajan's points

// db.scores.updateMany(
//   { name: "Rajan" },
//   {
//     $pop: {
//       points: 1,
//     },
//   }
// );
// db.scores.find();

//? decrease age of Smarika by 20

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $inc: { age: -20 },
//   }
// );

//? push {sub : "C Program",point:72} and {sub:"C++",point:65} on Smarika's points

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Program", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );
// db.scores.find();

//? divide the age of Rajan by 2

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $mul: { age: 1 / 2 },
//   }
// );

// db.scores.find();
