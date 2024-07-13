
const getHomePage = (req, res) => {
    res.send('Hello homepage');
};

const getUser = (req, res) => {
    res.render('sample.ejs');
};
module.exports = {
    getHomePage, getUser
};