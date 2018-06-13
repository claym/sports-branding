# sports-branding

node module to return sports team colors and logos

## Install
`npm install node-stattleship`

## Usage
```javascript
var branding = require('sports-branding');

var primaryColor = branding.getPrimaryColor('EPL', 'MCI');

var colors = branding.getColors('NBA', 'CHA') // NBA data not present yet

var logo branding.getLogo('NFL', 'CAR') // not implemented yet
```

Special thanks to https://github.com/jimniels, who signed off on me ripping off a lot of his hard work from https://github.com/jimniels/teamcolors