//homework_01/ ES6
String.prototype.filterwords = function (badwords) {

  const delimeter = ' ';
  return this.split(delimeter).map(word => word.replace(new RegExp(badwords.join('|')), '***')).join(delimeter);
}
const sentence = "This house is ugly and dirty! baad!";
console.log(sentence.filterwords(['ugly', 'dirty']));

//homework_01/ Promise
String.prototype.filterWords = function (badWords) {
  const delimiter = ' ';
  return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};
function filterStringWords(statement, badWords) {
  return new Promise(function (resolve, reject) {
    const result = statement.filterWords(badWords);
    resolve(result);
  })
    .then(function (data) {
      console.log(data);
    });
}
filterStringWords('This house is nice!', ['house', 'nice']);


//homework_01/ Async/Await
String.prototype.filterWords = function (badWords) {
  const delimiter = ' ';
  return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);

};
async function filterStringWords(statement, badWords) {
  try {
    const result = await statement.filterWords(badWords);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
filterStringWords('This house is nice!', ['house', 'nice']);

//homework_01/ Obserables
const { Observable } = require('rxjs');
String.prototype.filterWords = function (badWords) {
  const delimiter = ' ';
  return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};
function filterStringWords(statement, badWords) {
  return Observable.create(function(observer){
    const result = statement.filterWords(badWords);
    observer.next(result);
    observer.complete();
  });

}
const observable = filterStringWords('This house is nice!', ['house', 'nice']);
observable.subscribe((data) => {
  console.log(data);
});