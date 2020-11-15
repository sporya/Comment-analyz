
//import {Qs} from('https://cdnjs.cloudflare.com/ajax/libs/qs/6.7.0/qs.min.js') ;
//import {axios} from('https://unpkg.com/axios/dist/axios.min.js') ;
     // Text-Processing API Url
     const API_URL = 'https://japerk-text-processing.p.rapidapi.com/sentiment/';
     // RapidAPI request headers
     const REQUEST_HEADERS = {
       'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
       , 'X-RapidAPI-Key': '768d224b32mshbe5f76705cbfd9bp154850jsnba7a2201e140'
       , 'Content-Type': 'application/x-www-form-urlencoded'
     };
     // Button click handler
     export default function AnalyzeCommentText(Commenttxt) {
       // Getting a textarea element with a comment
       const commentElement = Commenttxt;
       // Getting comment text
      // const commentText = commentElement.value.trim();
       // Handle empty comment
       if (!commentElement) {
               return handleEmptyComment();
       }
       // Calling the API and passing the result with the displayResult as a callback function
       return analyzeComment(commentElement, displayResult);
     };
     const analyzeComment = (comment, callback) => {
       // Creating an object to send to the server
       const data = {
               text: comment
               , language: 'english'
       };
       // Encoding data for application/x-www-form-urlencoded content type
       const formattedData = Qs.stringify(data);
       // POST request to server
       axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
               .then(response => {
                 const data = response.data;
                 // Calling a callback function with data from the server
                 callback(data)
               })
               .catch(error => console.error(error))
     };
     function handleEmptyComment() {
       return alert('Your comment is empty');
     };
     const displayResult = result => {
      
       // Setting the color of the result text depending on the response label
       const label = result.label;
       const resultElement = document.getElementById('result');
       resultElement.setAttribute('class', label);
       var resultText = '';
       // Choosing the result text depending on response label
       switch (label) {
           case 'pos':
               resultText = 'Wow! Your comment is very positive!';
               break;
           case 'neg':
               resultText = 'Negative comment =(';
               break;
           case 'neutral':
               resultText = 'Simple comment =)';
               break;
           default:
               resultText = 'Hmmm, cant understand your comment';
       }
       // Setting the result text
       resultElement.textContent = resultText;
      return resultText;
     };
      