const AnalyzeCommentText =require('./');
var resultElementst = AnalyzeCommentText('fuck');
resultElementst.then(function(result) {
    console.log(result) 
 })