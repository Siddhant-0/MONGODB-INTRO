use("KEC-CRUD"); //!database

//? to insert data

//? insert one

// db.student.insertOne({
//   name: "Unik",
//   address: "Imadol",
// });

// db.student.find();

// db.student.insertOne({
//   _id: 101,
//   name: "Smarika",
//   address: "Patan",
// });

// db.student.find();

//? insert many

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },
//   {
//     name: "Pratik",
//     address: "Godawari",
//   },
// ]);

// db.student.find();

//? Read operation

//? findOne
//? find

// db.student.find({ address: "Imadol" });
// db.student.findOne({ name: "Samundra" });

// db.student.findOne({ address: "Imadol" });
// db.student.find({ _id: 101 });

// db.student.find({ _id: ObjectId("667e978b03ef74629c3f01ea") });

//? delete => remove data from DB

//? deleteOne
//? deleteMany

// db.student.deleteOne({ address: "Godawari" });  //! deletes the  first data with address "Godawari"

// db.student.deleteMany({ address: "Imadol" });  //! deletes all data with address "Imadol"

//? update => to change field data(s)

//? updateOne
//? updateMany

// db.student.updateOne(
//   {
//     name: "Samundra",
//   },
//   {
//!use $set: to update the field data
//     $set: {
//       name: "Siddhant",
//     },
//   }
// );

//? update many with address value Dhapakhel
// db.student.updateMany(
//   {
//     address: "Dhapakhel",
//   },
//   {
//     $set: {
//       address: "Satdobato",
//     },
//   }
// );

// db.student.find();

//? Upsert
//! update if available else insert

// db.student.updateOne(
//   {
//     name: "Saugat",
//   },
//   {
//     $set: {
//       address: "Imadol",
//     },
//   },
//   {
//     upsert: true,
//   }
// );

// db.student.find();
