const AnalyzeCommentText =require('./');
var resultElementst = AnalyzeCommentText('hi');
resultElementst.then(function(result) {
    console.log(result) 
 })