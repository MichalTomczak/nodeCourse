/**
 * Created by Grucha on 21/06/2019.
 */
const fs = require('fs');
/*
const book ={
    title: 'The Stand',
    author: 'Stephen King'
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);*/


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Michal';
data.age = '33';

const returnData = JSON.stringify(data);
fs.writeFileSync('1-json.json',returnData);
