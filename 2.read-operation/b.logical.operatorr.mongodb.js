use("KEC-CRUD");
//? logical operator
//? $and ,$or, $ not ,$nor

//! $not
//? find movies whose genre is "Action" and rating is greater than 7

// db.Movies.find(
//   {
//     $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }],
//   },
//   { name: 1, _id: 0, genres: 1, avgRating: "$rating.average" }
// );

//? alternative code

// db.Movies.find({ genres: "Action", "rating.average": { $gt: 7 } });

//! $or
//? find movies whose genres is "Crime" or network country  is "United States"
// db.Movies.find(
//   {
//     $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//   },
//   {
//     _id: 0,
//     name: 1,
//   }
// );

//! $nor => all applied condition should not match

//? find movies whose rating is neither greater than 7 nor genres is "Drama"

db.Movies.find(
  { $nor: [{ "rating.average": { $gt: 7 } }, { genres: "Drama" }] },
  { _id: 0, name: 1, avgRating: "$rating.average", genres: 1 }
);
