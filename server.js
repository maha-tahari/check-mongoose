const express=require ("express")
const app = express ();
const mongoose=require("mongoose");
const user = require("./models/user.js");


mongoose.connect("mongodb://localhost/contactDB", ()=> {console.log("database is connected successfully")},
()=> {console.error("database failed")})

const run = async ()=>{
    // create new user
   try {
       const Person=await user.create({
           name: "maha",
           age:30,
           favoriteFoods:["Pasta", "Pizza"],
       },
       {
        name: "wael",
        age:24,
        favoriteFoods:["Couscous", "Burger"],
       }
       )
       console.log(Person)
   } catch (e) {
       console.log(e.message)
       
   }

// find by name 
//try {
    // const Person = await user.find({
   //   name: "wael",
    //});
    // console.log(Person);
    //  } 
    // catch (e) {
    //   console.log(e.message);
    // }
    
// findone by name 
//try {
    // const Person = await user.findOne({
   //   name: "wael",
    //});
    // console.log(Person);
    //  } 
    // catch (e) {
    //   console.log(e.message);
    // }

    //find by ID
//try {
// const Person = await user.findById("61d593a6ccea692953012244");
// console.log(Person);
//  } 
// catch (e) {
//   console.log(e.message);
// }



// Update
//try {
 //const Person = await user.findOneAndUpdate(
  //    { id: "61d5a29ee926a1e97db1f95f" },
   //   { $push: { favoriteFoods: "Humberger" } }
    // );
//console.log(Person);
// } 
//catch (e) {
 // console.log(e.message);
//}

// Delete One Document
//try {
 //const Person = await user.findByIdAndRemove("61d5a29ee926a1e97db1f95f");
//console.log(Person);
// } 
//catch (e) {
 // console.log(e.message);
//}

//  Delete Many Documents
//try {
 //const Person = await user.remove({
  //    name: "maha",
//    });
//console.log(Person);
// } 
//catch (e) {
 // console.log(e.message);
//}



// Chain Search Query Helpers to Narrow Search Results
try {
const Person = await user.find({favoriteFoods:"Pizza",})
.sort("name")
.limit(2)
.select(["name", "favoriteFoods"])
.exec();
console.log(Person);
 } 
catch (e) {
   console.log(e.message);
}

};

run();
app.listen(5000, ()=>{console.log('server is running on 5000')})