const fs = require('fs');
const path = require('path');

const directory = 'D:\\headout\\DumpData'; 
const fileSize = 100 * 1024 * 1024; // 100MB
const totalFiles = 5;

function generateRandomText(size) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const lineLength = 100; // Length of each line

    for (let i = 0; i < size; i++) {
        if (i % lineLength === 0 && i !== 0) {
            result += '\n'; // Add a newline character after every 100 characters
        }
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function createFile(fileName, size) {
    const filePath = path.join(directory, fileName);
    fs.writeFileSync(filePath, generateRandomText(size));
}

function main() {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    for (let i = 1; i <= totalFiles; i++) {
        console.log(`Generating file ${i}.txt...`);
        createFile(`${i}.txt`, fileSize);
    }
    console.log('Files generated successfully');
}

main();
