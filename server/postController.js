module.exports = {
    createPost: async (req, res) => {
        const db = req.app.get('db')

        const { id } = req.session.user
        const {title, content, img} = req.body

        let post = (await db.create_post(id, title, content, img))[0]

        if(post){
            res.sendStatus(200)
        }
    },
    getPost: (req, res) => {

    },
    getAllPosts: async(req, res) => {
        const db = req.app.get('db')

        const {userposts, search} = req.query
        
        let posts
        if(!req.session.user) {
            return res.sendStatus(404)
        }
        
        const { id } = req.session.user
        if(userposts === 'true') {
            posts = await db.get_all_posts_user_true(search)
        }
        else {
            posts = await db.get_all_posts_user_false(search, id)
        }

        res.status(200).send(posts)
    },
    deletePost: (req, res) => {

    }
}