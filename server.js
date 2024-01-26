const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.get('/data', (req, res) => {
    const fileName = req.query.n;
    const lineNumber = req.query.m;

    if (!fileName) {
        return res.status(400).send("File name 'n' is required");
    }

    const filePath = `/tmp/data/${fileName}.txt`;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found");
    }

    if (lineNumber) {
        const line = parseInt(lineNumber, 10);
        if (isNaN(line)) {
            return res.status(400).send("Line number 'm' must be an integer");
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send("Error reading file");
            }
            const lines = data.split('\n');
            if (line > 0 && line <= lines.length) {
                return res.send(lines[line - 1]);
            } else {
                return res.status(404).send("Line number out of range");
            }
        });
    } else {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send("Error reading file");
            }
            res.send(data);
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
