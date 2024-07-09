use("KEC-CRUD");

//? comparison operator
//? $eq,$ne,$gt,$gte,$lt,$lte,$in,$nin

// $eq -> equal to
//? find movie whose name is "Glee"
//? name === "Glee"

// db.Movies.find({ name: { $eq: "Glee" } });
//!second {} selects the datas that are to be seen in the output
// db.Movies.find({ name: { $eq: "Glee" } }, { name: 1, genres: 1 });

//?equivalent code
// db.Movies.find({ name: "Glee" });

// $gt -> greater than
// $gte -> greater than or equals to
//? find movies whose runtime is greater than 70
// db.Movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1, _id: 0 });

//? find movies whose rating is greater than 9
// db.Movies.find();
// db.Movies.find(
//   { "rating.average": { $gte: 9 } },
//   { name: 1, _id: 0, averageRating: "$rating.average" }
//   //! $ is put in front of the variable to extract
// );

//$ne -> not equals to

// db.Movies.find({ id: { $ne: 1 } }, { name: 1, _id: 0, id: 1 });
//? alternative code  below
// db.Movies.find({ id: { $not: { $eq: 1 } } }, { _id: 0, name: 1 });
