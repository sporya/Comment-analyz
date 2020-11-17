# Comment-analyz

This is a JavaScript package that examines comments through an API and returns values that I will explain in more detail below.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Comment-analyz.

```bash
npm install Comment-analyz
```

# Usage
for add to project use: 
```javascript
const AnalyzeCommentText =require('./');
```
or
```javascript
import AnalyzeCommentText from "Comment-analyz";
```
in the index.js file you can find displayresult(), you can change the result massage in:

```javascript
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

```

## Contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
