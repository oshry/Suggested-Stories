// module.exports = function(req,res,next) {
    // if(req.method === 'GET') {
    //     res.end('GET method not supported');
    // } else {
    //     next();
    // }
// };


module.exports = function(options) {
    return function(req, res, next) {
        const rp = require('request-promise');
        // Implement the middleware function based on the options object

        var options = {
            // method: 'GET',
            // uri: 'https://api.bllush.com/sandbox/get-stories-details.json',
            uri: 'https://api.bllush.com/sandbox/get-stories-details.json',
            // body: {
            //     // param1: '',
            //     // param2: ''
            // },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically stringifies the body to JSON
        };
        rp(options)
            .then(function (parsedBody) {
                // POST succeeded...
                // console.log(parsedBody.data.stories);
                // console.log('yessssssssssssssssss');
                // var buf = Buffer.from(JSON.stringify(parsedBody));
                // res.end(buf);
                req.data = parsedBody.data.stories;
                // console.log(req.data);
                // req.data = buf;
                next();

            })
            .catch(function (err) {
                console.log('api error');
                // console.log(err);
                next(false);

            });


    }
}