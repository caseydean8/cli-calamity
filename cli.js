const TV = require("./tv"); 
const Actor = require("./actor");
const tv = new TV();
const actor = new Actor();

let search = process.argv[2];

let term = process.argv.slice(3).join(" ");

// search === "actor" || search === "show"
//   ? console.log("Search parameter:", search)
//   : console.log("Invalid parameter, searching for show");

if (!search) search = "show";
if (!term) term = "Andy Griffith";

if (search === "show") {
  console.log("\nSearching for show");
  tv.findShow(term);
} else if (search === "actor") {
  console.log("\nSearching for actor");
  actor.findActor(term);
}