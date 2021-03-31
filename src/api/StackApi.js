var axios = require("axios");

function getQuestions() {
  return new Promise((resolve, reject) => {
    axios
      .default({
        method: "GET",
        url:
          "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&order=desc&sort=activity&site=stackoverflow",
      })
      .then((result) => {
        resolve(result.data.items);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = getQuestions;