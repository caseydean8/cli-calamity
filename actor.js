const axios = require("axios");
const fs = require("fs");

var Actor = function () {
  this.findActor = function (act) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = `http://api.tvmaze.com/search/people?q=${act}`;
    axios
      .get(URL)
      .then((res) => {
        const act = res.data[0].person;
        const name = act.name;
        const birthday = act.birthday;
        const gender = act.gender;
        const country = act.country.name;
        const url = act.url;
        
        const actorString = `\nName: ${name}\n\nBirthday: ${birthday}\n\nGender: ${gender}\n\nCountry: ${country}\n\nURL: ${url}\n`;
        // this works, but maybe should be function not =>
        fs.appendFile("log.txt", actorString, (err) => {
          err ? console.log(err) : console.log(actorString);
        });
      })
      .catch((err) => console.log(err));
  };
};

module.exports = Actor;
