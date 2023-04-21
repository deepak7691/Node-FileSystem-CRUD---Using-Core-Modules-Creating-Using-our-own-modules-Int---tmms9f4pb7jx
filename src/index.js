const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	try {
		await fs.writeFile(fileName, fileContent);
		console.log(`File '${fileName}' created successfully!`);
	} catch (err) {
		console.error(`Failed to create file '${fileName}': ${err.message}`);
	}
};

const myFileReader = async (fileName) => {
	try {
		const data = await fs.readFile(fileName, 'utf-8');
		console.log(`Content of file '${fileName}':\n${data}`);
		return data;
	} catch (err) {
		console.error(`Failed to read file '${fileName}': ${err.message}`);
	}
};

const myFileUpdater = async (fileName, fileContent) => {
	try {
		const data = await fs.readFile(fileName, 'utf-8');
		const updatedContent = data + fileContent;
		await fs.writeFile(fileName, updatedContent);
		console.log(`File '${fileName}' updated successfully!`);
	} catch (err) {
		console.error(`Failed to update file '${fileName}': ${err.message}`);
	}
};

const myFileDeleter = async (fileName) => {
	try {
		await fs.unlink(fileName);
		console.log(`File '${fileName}' deleted successfully!`);
	} catch (err) {
		console.error(`Failed to delete file '${fileName}': ${err.message}`);
	}
};


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };


// const fs = require('fs');

// const myFileWriter = (fileName, fileContent, callback) => {
// 	fs.writeFile(fileName, fileContent, (err) => {
// 		if (err) {
// 			callback(`Failed to create file '${fileName}': ${err.message}`);
// 		} else {
// 			callback(null, `File '${fileName}' created successfully!`);
// 		}
// 	});
// };

// const myFileReader = (fileName, callback) => {
// 	fs.readFile(fileName, 'utf-8', (err, data) => {
// 		if (err) {
// 			callback(`Failed to read file '${fileName}': ${err.message}`);
// 		} else {
// 			console.log(`Content of file '${fileName}':\n${data}`);
// 			callback(null, data);
// 		}
// 	});
// };

// const myFileUpdater = (fileName, fileContent, callback) => {
// 	fs.readFile(fileName, 'utf-8', (err, data) => {
// 		if (err) {
// 			callback(`Failed to update file '${fileName}': ${err.message}`);
// 		} else {
// 			const updatedContent = data + fileContent;
// 			fs.writeFile(fileName, updatedContent, (err) => {
// 				if (err) {
// 					callback(`Failed to update file '${fileName}': ${err.message}`);
// 				} else {
// 					callback(null, `File '${fileName}' updated successfully!`);
// 				}
// 			});
// 		}
// 	});
// };

// const myFileDeleter = (fileName, callback) => {
// 	fs.unlink(fileName, (err) => {
// 		if (err) {
// 			callback(`Failed to delete file '${fileName}': ${err.message}`);
// 		} else {
// 			callback(null, `File '${fileName}' deleted successfully!`);
// 		}
// 	});
// };

// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
