const bouncy = require('bouncy');

var router = bouncy(function (req, res, bounce) {
    if(req.headers.host === 'arigata9.de') {
        console.log('<arigata9.de> Rerouting to 3001...');
        bounce(3001);
    }
    else if(req.headers.host === 'bot.arigata9.de') {
        console.log('<bot.arigata9.de> Rerouting to 3002...');
        bounce(3002);
    }
    else if(req.headers.host === 'cdn.arigata9.de') {
        console.log('<cdn.arigata9.de> Rerouting to 3003...');
        bounce(3003);
    }
    else if(req.headers.host === 'blog.arigata9.de') {
        bounce(3004)
    }
    else {
        console.log('Route <'+req.headers.host+'> couldnt be handled.');
        res.statusCode = 404;
        res.end('no such domain');
    }
});
router.listen(3000);
console.log('Router started at 3000');
