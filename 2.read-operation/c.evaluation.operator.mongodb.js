use("KEC-CRUD");

//?evaluation operator
//? $regex,$expr

//! $regex search searches incomplete informations

// db.Movies.find({ name: { $regex: "top model", $options: "i" } });
//! $option : "i" makes the search case insensitive

// db.Movies.find(
//   { summary: { $regex: "dark comical", $options: "i" } },
//   { _id: 0, name: 1 }
// );

//! new data set
//! $expr -> compares data of two different fields

// db.employee.insertMany([
//     { name: "Utsarga", income: 800, expense: 600 },
//     { name: "Smriti", income: 900, expense: 1100 },
//     { name: "Samrat", income: 1100, expense: 700 },
//   ]);

//?find employees whose expense is greater than their income

db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });

//?find employees whose income is less than 850

db.employee.find({ income: { $lt: 850 } });
