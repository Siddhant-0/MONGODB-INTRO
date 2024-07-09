//? aggregation -> query -read- tool

//? AGGREGATION => POWERFUL QUERY TOOL   ->allows filtering,sorting etc of data

//? alternative of find

//? USES pipeline stage
//? $match
//? $project
//? $sort
//? $skip
//? $limit
//? $lookup
//? $unwind

// TODO : group

use("KEC-CRUD");

//? $match -> query tool

// db.Movies.aggregate([
//   {
//     $match: {
//       name: "Glee",
//     },
//   },
// ]);
//
// db.Movies.find({},{ _id: 0, name: 1 });

//? >>>>>>>>>>>>>>>>>>>>>>>>>>>>

//?! $project used to find only the datas required
// db.Movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     //!$project pipeline stage
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

//? find the movies whose genre is Crime and network country is United States

// db.Movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//       //! as aggregate does not change the database so
//     },
//   },
// ]);

//? find movies whose genre inclused both Drama and Comedy
//? and project name and genre field

// db.Movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

//? $sort  ->>> arranges data in either ascending or descending order
//! 1 ->> ascending sort
//! -1 ->> descending sort

// db.Movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: -1,
//       name: 1, //!compound sort ---> when 2 ids are same 2nd one sorts
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//       _id: 0,
//     },
//   },
// ]);

//? ..........>>>>>>>>4

// db.Movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: -1, //! descending sort
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//     },
//   },
// ]);

//?  $limit -->> to limit number of documents to be returned

// db.Movies.insertOne({ id: 17, name: "The Usual Suspects" });

// db.Movies.aggregate([
//   { $match: {} },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//       _id: 0,
//     },
//   },
//! $limit --> used as an extension in the aggregate to show number of data from DB
//   {
//     $limit: 5,
//   },
// ]);

//? find  5 movies whose rating is greater than 8 and id is sorted in ascending order

// db.Movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       name: 1,
//       id: 1,
//       _id: 0,
//       ratingAVG: "$rating.average",
//     },
//   },
// ]);

//?  $skip ->>>>

// db.Movies.deleteOne({ id: 17 });
// db.Movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       id: 1,
//     },
//   },
// ]);

let page = 3;
let limit = 10;
let skip = (page - 1) * limit;
db.Movies.aggregate([
  {
    $match: {},
  },
  {
    $sort: {
      id: 1,
    },
  },
  {
    $skip: skip,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      _id: 0,
      name: 1,
      id: 1,
    },
  },
]);
