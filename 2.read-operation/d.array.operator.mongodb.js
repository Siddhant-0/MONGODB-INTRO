use("KEC-CRUD");

// array operators

//? $all
//? $elemMatch
//? $size

//! $all
//? find movies whose genre includes both "Drama" and "Comedy"
// db.Movies.find(
//   { $and: [{ genres: "Drama" }, { genres: "Comedy" }] },
//   { _id: 0, name: 1, genres: 1 }
// );

//! same field ma "$and " use bhairako cha ra tyo  field array ho bhaney
//! then use $all

//? alternative code of above

// db.Movies.find({ genres: { $all: ["Drama", "Comedy"] } }, { _id: 0, name: 1 });
// db.Movies.find({ genres: ["Drama", "Comedy"] }); //! only drama and comedy

//! $size => array size search
// //? find movies whose genre size is 3
// db.Movies.find({ genres: { $size: 3 } }, { name: 1, _id: 0 });

//! $elemMatch

// db.scores.insertMany([
//   {
//     name: "Subham",
//     scores: [82, 85, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 82,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Suyasha",
//     scores: [75, 88, 89],
//     points: [
//       {
//         sub: "Social",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 84,
//       },
//     ],
//   },

//   {
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//   },
// ]);

// db.scores.find();

//? find student whose subject is social and score in social is gt 80

// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// });

//? find the students whose scores is greater than 80 and less than 85

// db.scores.find({ scores: { $elemMatch: { $gt: 80, $lt: 85 } } });
