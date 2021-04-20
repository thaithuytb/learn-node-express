const Post = require('../Models/post.model');
const { mutipleDataUseHandlebars } = require('../Util/index');

class PostController {

    index = (req, res) => {
        Post.find({}, function (err, posts) {

            const dataPosts = mutipleDataUseHandlebars(posts);
            if (!err) {
                res.render('Home', {
                    dataPosts
                });
            }
            else {
                res.status(400).json({ error: 'message' })
            }

        });
    }

}

module.exports = new PostController;