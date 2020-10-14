const bouncy = require('bouncy');

var router = bouncy(function (req, res, bounce) {
    if(req.headers.host === 'arigata9.de') {
        bounce(3001);
    }
    else if(req.headers.host === 'bot.arigata9.de') {
        bounce(3002);
    }
    else if(req.headers.host === 'cdn.arigata9.de') {
        bounce(3003);
    }
    else if(req.headers.host === 'blog.arigata9.de') {
        bounce(3004)
    }
    else {
        res.statusCode = 404;
        res.end('no such domain');
    }
});
router.listen(3000);