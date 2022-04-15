import { ss } from './read_data_ip.js';

var arr = ss();
const l = arr[0];
const start = arr[1];
const end = arr[2];
const a = arr[3];
const y = parseInt(l[0]);

var m = Array(l[1]);
for (var i = 0; i < l[1]; i++) {
    m[i] = Array(y).fill(0);
}

for (let key in l){
    l[key] = parseInt(l[key])
}

for (let key in start){
    start[key] = parseInt(start[key])
}

for (let key in end){
    end[key] = parseInt(end[key])
}

m[start[1]][start[0]] = 1

/*If we find a number that corresponds to the step number k , look at surrounding cells, and check if:
1. There is no number yet
2. There is no wall
And set the k+1 to that cells.*/
function make_step(k){
for (let i = 0; i < l[1]; i++){
    for (let j = 0; j < l[0]; j++){
        if (m[i][j] == k){
            if (i>0 && m[i-1][j] == 0 && a[i-1][j] == 0){
                m[i-1][j] = k + 1
                }
            if (j>0 && m[i][j-1] == 0 && a[i][j-1] == 0){
                m[i][j-1] = k + 1
                }
            if (i<l[0]-1 && m[i+1][j] == 0 && a[i+1][j] == 0){
                m[i+1][j] = k + 1
                }
            if (j<l[1]-1 && m[i][j+1] == 0 && a[i][j+1] == 0){
                m[i][j+1] = k + 1
                }
            }
        }
    }
}

if (end[1]<l[1] && end[0]<l[0] && parseInt(a[end[1]][end[0]])==0){
    var k = 0
    while (m[end[1]][end[0]] == 0 && k<l[0]*l[1]) {
        k += 1;
        make_step(k);
    }
        
    var i=end[1]
    var j=end[0]
    k = m[i][j]
    // It will contain the co-oedinates of the shoertest path
    var the_path = [[i,j]]
    while (k > 1){
        if (i > 0 && m[i - 1][j] == k-1){
        i=i-1 
        j=j
        the_path.push([i, j])
        k=k-1
        }
        else if (j > 0 && m[i][j - 1] == k-1){
        i=i
        j = j-1
        the_path.push([i, j])
        k=k-1
        }
        else if (i < l[0] - 1 && m[i + 1][j] == k-1){
        i= i+1, 
        j=j
        the_path.push([i, j])
        k=k-1
        }
        else if (j < l[1] - 1 && m[i][j + 1] == k-1){
        i=i
        j =j+1
        the_path.push([i, j])
        k=k-1
        }
    }
        
    for (let key in the_path){
        var n=the_path[key]
        m[n[0]][n[1]]="X"
    }  
    m[start[1]][start[0]]="S"
    m[end[1]][end[0]]="E"
        
    for (let i = 0; i < l[1]; i++){
            for (let j = 0; j < l[0]; j++){
                if (m[i][j]==0){
                    m[i][j]="#"
                }
                else if (m[i][j]>0) {
                    m[i][j]=" "
                }
            }
        }

    console.log(m)
    }
else if (a[end[1]][end[0]]!=0){
    console.log("End point does contain wall. PATH IS NOT POSSIBLE!");
    }
else if (end[1]>=l[1] || end[0]>=l[0]){
    console.log("End point is present outside of the Maze. PATH IS NOT POSSIBLE!")
}