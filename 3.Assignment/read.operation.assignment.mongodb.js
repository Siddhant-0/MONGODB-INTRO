use("KEC-CRUD");

// db.Movies.find();

// ?read operations

//?Find movies whose status is "Ended"
// db.Movies.find({ status: "Ended" }, { _id: 0, name: 1 });

// ?find movies whose rating is 9

// db.Movies.find({ "rating.average": 9 }, { _id: 0, name: 1 });

// ?find movies whose rating is greater than 7 and less than 9

// db.Movies.find(
//   {
//     $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
//   },
//   { _id: 0, name: 1, rating: 1 }
// );
//! alternative
// db.Movies.find(
//   { "rating.average": { $lt: 9, $gt: 7 } },
//   { _id: 0, name: 1, rating: 1 }
// );

// ?find movies whose genres is Thriller

// db.Movies.find({ genres: "Thriller" });

// ?find movies whose status is Running

// db.Movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60

// db.Movies.find(
//   { $and: [{ status: "Ended" }, { runtime: 60 }] },
//   { _id: 0, name: 1,status :1 }
// );

// ?find movies whose weight is 75 and network country is Canada

// db.Movies.find(
//   { $and: [{ weight: 75 }, { "network.country.name": "Canada" }] },
//   { _id: 0, name: 1 }
// );

// ?find movies whose weight is 96 or runtime is 60

// db.Movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] }, { _id: 0, name: 1 });

// ? find movies whose rating average is not 9

// db.Movies.find({ "rating.average": { $not: { $eq: 9 } } });

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

// db.movies.find(
//   {
//     $or: [
//       { "rating.average": 6 },
//       { "rating.average": 6.5 },
//       { "rating.average": 9 },
//       { "rating.average": 8 },
//       { "rating.average": 8.5 },
//       { "rating.average": 8.6 },
//       { "rating.average": 7.7 },
//       { "rating.average": 6.1 },
//       { "rating.average": 7.8 },
//     ],
//   },
//   {
//     _id: 0,
//     name: 1,
//     avgRating: "$rating.average",
//   }
// );

// ? find movies whose status is neither "Ended" not genres is "Action"

// db.Movies.find({ $nor: [{ status: "Ended" }, { genres: "Action " }] });

// ? find movies whose genres includes 'Drama' , "Comedy" and "Action"

db.Movies.find(
  { genres: { $all: ["Drama", "Comedy", "Action"] } },
  { _id: 0, name: 1, genres: 1 }
);

// ? find movies whose genre size is 3

// db.Movies.find({ genres: { $size: 3 } }, { _id: 0, name: 1, genres: 1 });
