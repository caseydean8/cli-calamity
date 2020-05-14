const axios = require("axios");
const fs = require("fs");

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios
      .get(URL)
      .then((res) => {
        const show = res.data;
        const name = show.name;
        const genre = show.genres.toString();
        const rating = show.rating.average;
        const network = show.network.name;
        const summary = show.summary.replace(/<\/?[^>]+(>|$)/g, "");
        
        const showString = `\nName: ${name}\n\nGenre: ${genre}\n\nRating: ${rating}\n\nNetwork: ${network}\n\nSummary: ${summary}\n`;
        // this works, but maybe should be function not =>
        fs.appendFile("log.txt", showString, (err) => {
          err ? console.log(err) : console.log(showString);
        });
      })
      .catch((err) => console.log(err));
  };
};

module.exports = TV;
