const bouncy = require('bouncy');

var router = bouncy(function (req, res, bounce) {
    switch(req.headers.host) {
        case 'arigata9.de':
            bounce(3001);
            break;
        case 'bot.arigata9.de':
            bounce(3002);
            break;
        case 'cdn.arigata9.de':
            bounce(3003);
        default:
            res.statusCode = 404;
            res.end('No such domain');
    }
});
router.listen(3000);