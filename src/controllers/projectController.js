const { createProject, getProject } = require('../services/productService');
const postCreateProject = async (req, res) => {
    let result = await createProject(req.body);
    return res.status(200).json({
        EC: 0,
        data: result
    })
};

const getAllProject = async (req, res) => {
    let result = await getProject(req.query);

    return res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = { postCreateProject, getAllProject };