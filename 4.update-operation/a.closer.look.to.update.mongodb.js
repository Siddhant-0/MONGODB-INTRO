use("KEC-CRUD");

// ? $set

// db.scores.updateOne({ name: "Subham" }, { $set: { name: "Rajan" } });
// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );

// db.scores.find();

//? $unset  => removes that field

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );

//? update age of Rajan  to 30

// db.scores.find(
//   {
//     name: "Rajan",
//   },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );
// db.scores.find();

// //? update age of Suyasha to 40
// db.scores.find(
//   {
//     name: "Suyasha",
//   },
//   {
//     $set: {
//       age: 40,
//     },
//   }
// );
// db.scores.find();

//? $inc => increases field value by provided
//TODO: COmplete this in home

//? $mul  => multiply
// TODO : research ObjectId
// db.scores.updateOne(
//   { _id: ObjectId("668299732f53a96d69103099") },
//   { $mul: { } }
// );

//? divide the  age of Suyasha by 2

// db.scores.update(
//   {
//     name: "Suyasha",
//   },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

// db.scores.find();

//? $rename => renames field
//!rename a field value
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "Marks",
//     },
//   }
// );

//? $min ,$max

//? $min -> if the field vlaue is more than specified value , it sets min value to 16
// db.scores.updateMany(
//   {},
//   {
//     $min: {
//       age: 16,
//     },
//   }
// );
// db.scores.find();

//? $max -> if the fieldvalue is less than specifeid value than the value is set to max value

// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );
// db.scores.find();

//?

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );
// db.scores.find();

//? update lucky color of Suyasha to Blue

// db.scores.updateMany(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.color": "Blue",
//     },
//   }
// );
// db.scores.find();

// //? update lucky number of Smarika to 8
// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );
// db.scores.find();

//? increase lucky number of rajan by 3

// db.scores.updateMany(
//   { name: "Rajan" },
//   {
//     $'inc': {
//       "luckyThings.number": 3,
//     },
//   }
// );
// db.scores.find();
