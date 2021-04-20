const routerPost = require('./post.route');

const router = (app) => {
    app.get('/dang-ki', (req, res) => res.render(`SignIn`));
    app.get('/dang-nhap', (req, res) => res.render(`SignUp`));
    app.use('/bai-viet', routerPost);
    app.get('/', (req, res) => res.render(`Home`));
}

module.exports = router;