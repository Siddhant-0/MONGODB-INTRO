use("KEC-CRUD");

//? $lookup
//? to query between collections

// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udaypur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb31e51608a58a73fd3fa"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb31e51608a58a73fd3fb"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb31e51608a58a73fd3fc"),
//   },
// ]);

//?..............................................................?//

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       carModel: { $first: "$vehicleDetails.model" },
//     },

//     //!only noobs use the code given below
//     // $project: {
//     //   firstName: 1,
//     //   carDetails: {
//     //     Model: { $arrayElemAt: ["$vehicleDetails.model", 0] },
//     //     Brand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//     //   },
//     // },
//   },
// ]);

//? insert new vehicle for Enish
// db.vehicle.insertOne({
//   model: "Y",
//   Brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb31e51608a58a73fd3fc"),
// });

//? linking person to vehicle for Enish in the data table

db.person.aggregate([
  {
    $match: {
      firstName: "Enish",
    },
  },
  {
    $lookup: {
      from: "vehicle",
      localField: "_id",
      foreignField: "ownerId",
      as: "vehicleData ",
    },
  },
  {
    $project: {
      firstName: 1,
      lastName: 1,
      models: "$vehicleData.model",
      "vehicleData.model": 1,
      "vehicleData.brand": 1,
    },
  },
]);
