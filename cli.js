const TV = require("./tv");
const Actor = require("./actor");
const inquirer = require("inquirer");
const tv = new TV();
const actor = new Actor();

inquirer
  .prompt([
    {
      type: "list",
      message: "Choose show or actor.",
      choices: ["Show", "Actor"],
      name: "search",
    },
  ])
  .then((res) => {
    // console.log(res);
    res.search === "Show" ? showSearch() : actorSearch();
  })
  .catch((err) => console.log(err));

const showSearch = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter a show title",
        name: "showInput",
      },
    ])
    .then((res) => {
      console.log(`Searching for ${res.showInput}`);
      tv.findShow(res.showInput);
    });
};

const actorSearch = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter an actor or actresses name.",
        name: "actorInput",
      },
    ])
    .then((res) => {
      console.log(`Searching for ${res.actorInput}`);
      actor.findActor(res.actorInput);
    });
};
