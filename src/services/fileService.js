const path = require('path');

const uploadSingleFile = async (fileObject) => {
    // Save file to path "__dirname/../public/iamges/upload", resolve to connect two paths to be one real path
    let uploadPath = path.resolve(__dirname, "../public/images/upload");

    // get image extension (like: .png, .jpeg,...)
    let extName = path.extname(fileObject.name);
    // get image's name (without extension)
    let baseName = path.basename(fileObject.name, extName);
    // final type name you want to convert
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalPath).then().catch();

        return {
            status: 'succeess',
            path: finalName,
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
const uploadSMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        let resultArr = [];
        let countSuccess = 0;

        for (let i = 0; i < filesArr.length; i++) {
            // get image extension (like: .png, .jpeg,...)
            let extName = path.extname(filesArr[i].name);
            // get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);
            // final type name you want to convert
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath).then().catch();

                resultArr.push({
                    status: 'succeess',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                console.log('Check error: ', err);
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadSingleFile, uploadSMultipleFiles
}