const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let teamName = '';
  let sortArray = deleteSpace(members).sort();
  members.sort();

  for (let elem of sortArray) {
    teamName += elem[0];
  }

  return teamName;
};

function deleteSpace(arr) {
  let res = [];
  for (let elem of arr) {
    if (typeof (elem) === 'string') {
      res.push(elem.replace(/\s+/, '').toUpperCase());
    }
  }
  return res;
}

