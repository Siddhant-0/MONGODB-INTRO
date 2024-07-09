use("KEC-CRUD");

//? $unwind
//? unwind --->>> undo or be undone after winding

// db.products.insertOne({
//   name: "Bottle",
//   price: 400,
//   availableColor: ["blue", "green", "white"],
// });

//! $unwind -->> unwinds the array and gives each its dataset
// db.products.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $unwind: "$availableColor",
//   },
// ]);

//? example unwind insert dataset

// db.learner.insertOne({
//   name: "Smriti",
//   scores: [
//     {
//       subject: "Computer Network",
//       marks: 68,
//     },
//     {
//       subject: "Project Management",
//       marks: 72,
//     },
//     {
//       subject: "Organization and Management",
//       marks: 58,
//     },
//   ],
// });

//?---->>>
db.learner.aggregate([
  {
    $match: {},
  },
  {
    $unwind: {
      path: "$scores",
    },
  },
  {
    $sort: {
      "scores.marks": 1, //! ascending order 1
    },
  },
  {
    $project: {
      name: 1,
      _id: 0,
      "scores.marks": 1,
    },
  },
]);

//TODO one more example of unwind
