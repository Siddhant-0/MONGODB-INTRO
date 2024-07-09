use("KEC-CRUD");

//? $operator
//? $ => element which matched the documentd

//? change the subject of Suyasha from Social to Environment
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Social" },
//   {
//     $set: {
//       "points.$.sub": "Environment",
//     },
//   }
// );
// db.scores.find();

//? increase the marks of maths of Suyasha by 5 marks
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Maths" },
//   {
//     $inc: {
//       "points.$.point": 5,
//     },
//   }
// );
// db.scores.find();

//? update sub from "C++" to "MERN" and point to 69 froom Smarika's data

// db.scores.updateOne(
//   { name: "Smarika", "points.sub": "C++" },
//   {
//     $set: {
//       "points.$.sub": "MERN",
//       "points.$.point": 69,
//     },
//   }
// );

//

//? update points to 70 for each sun of Smarika

// db.scores.updateOne(
//   {
//     name: "Smarika",
//   },
//   {
//     $set: {
//       "points.$[].point": 100,
//     },
//   }
// );

// db.scores.find();

//? update point to 75 for eaach subject which has a point below 70

db.scores.updateOne(
  { name: "Suyasha" },
  {
    $set: {
      "points.$[element].point": 75,
    },
  },
  {
    arrayFilters: [{ "element.point": { $lt: 70 } }],
  }
);
db.scores.find();
//! mathi ko garna paryo ghar ma

//? decrease each marks of Rajan by 10

//? set 57 marks to 77 Suyasha's marks

//? decrease each marks which are less than 80 by 10 marks for Smarika

//!extras>>>>>>>>>>>>>>>>>>>>>>
// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
// });
// db.scores.find();
