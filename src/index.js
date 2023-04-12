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
