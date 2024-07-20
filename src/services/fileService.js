const { patch } = require("../routes/web");

const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + '/abc/' + fileObject.name;
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath).then().catch();

        return {
            status: 'succeess',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        console.log('Check error: ', err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}
const uploadSMultipleFile = () => {

}

module.exports = {
    uploadSingleFile, uploadSMultipleFile
}