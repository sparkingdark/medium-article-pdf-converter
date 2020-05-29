const mediumParser = require('medium-article-parser');
const fs = require('fs')
const pdf = require('html-pdf')
const time = require('date-time')
const emitter = new EventEmitter()
emitter.setMaxListeners(100)
// or 0 to turn off the limit



//let url = 'https://towardsdatascience.com/automated-machine-learning-hyperparameter-tuning-in-python-dfda59b72f8a?source=grid_home---------0-59-----------------18---1fa8643f_3f41_42d6_bf2c_22618a062989--3'


let data_val = (url)=>{mediumParser(url).then((result) => {
    //returns object with author, title, date, image url, and html content
    let data = JSON.stringify(result['content']);
    var options = { format: 'Letter' };
  
    pdf.create(data, options).toFile('./generated'+`${time()}`+'.pdf', function(err, res) {
         if (err) return console.log(err);
          console.log(res); // { filename: '/app/businesscard.pdf' }
        });  
}, (error) => {
    //if given url is meant for Medium members only, it will return an error
})};

exports.data_val = data_val
