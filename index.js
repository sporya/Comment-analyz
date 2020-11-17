'use strict';

const Qs = require('./node_modules/qs');
const axios= require('./node_modules/axios');



     // Text-Processing API Url
     const API_URL = 'https://japerk-text-processing.p.rapidapi.com/sentiment/';
     // RapidAPI request headers
     const REQUEST_HEADERS = {
       'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
       , 'X-RapidAPI-Key': '768d224b32mshbe5f76705cbfd9bp154850jsnba7a2201e140'
       , 'Content-Type': 'application/x-www-form-urlencoded'
     };

 
     
     function handleEmptyComment() {
       return 'Your comment is empty';
     };


  function displayResult (comment) {
       
      const datacoment = {
               text: comment
               , language: 'english'
       };
       const formattedData = Qs.stringify(datacoment);
     

  const axioss= axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
               .then(response => {


                var resultText = '';
             
                 const data = response.data;

                 switch (data.label) {
                  case 'pos':
                      resultText = 'Posetiv Comment';
                      return resultText;
                      
                  case 'neg':
                      resultText = 'negativ comment';
                      return resultText;
                      
                  case 'neutral':
                      resultText = 'meutral coment';
                      return resultText;
                    
                  default:
                      resultText = 'Hmmm, cant understand your comment';
                      return resultText;
              }

               })
               .catch(error => console.error(error))
                 const resultElement = axioss;
                
                 return resultElement;
               
     };

     module.exports = function AnalyzeCommentText(Commenttxt) {
      const commentElement = Commenttxt;
      if (!commentElement) {
        return handleEmptyComment();
      }
      if (commentElement) {
        return displayResult(commentElement);
      
      }
    }
  
