const fs = require('fs');
const emlformat = require('eml-format');
const htmlparse = require('node-html-parser');

var eml = fs.readFileSync('examples/marginally-compelling_2020-07-21.eml', 'utf-8');

emlformat.read(eml, (error, email) => {
    if (error) {
        return console.log(error);
    }

    getImageUrls(email, (error, urls) => {

        if (error) {
            return console.log(error)
        }

        html = htmlparse.parse(email.html)
        const images = html.firstChild.querySelectorAll('img')
        urls = images.forEach( (image) => {
            image.getAttribute('src')
        })


    })

})

const getImageUrls(images, callback) => {

}

}