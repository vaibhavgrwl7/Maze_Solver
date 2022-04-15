import fs from 'fs';

export function ss() {  
    let data= fs.readFileSync('./input_file.txt', 'utf8')
    // Read data from file. Split the data at every new line and turn into an array.
    const arrayData = data.split('\r\n');
    const splitArray = [];
    for (let i = 0; i < arrayData.length; i++) {
        // Loop through array and push items into a new array splitting at the space
        var temp = arrayData[i].split(' ')
        parseInt(temp);
        splitArray.push(temp);
    }
    var l = splitArray[0];
    var start = splitArray[1];
    var end = splitArray[2];
    var hie = splitArray.length;
    var maze = [];
    for (let i=3; i < hie; i++){
        maze.push(splitArray[i]);
    }
    return [l,start,end,maze];
}
