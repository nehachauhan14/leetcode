/**
 * @param {number[][]} grid
 * @return {number}
 */


var uniquePathsIII = function(grid) {
    let totalPath = 0;
    let totalZero = 0;
    
    let dfs = (grid, i, j, totalZero) => {
        if(i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == -1 || (grid[i][j] == 2 && totalZero != 0) || grid[i][j] == 99) {
            return;
        }

        if(grid[i][j] == 2 && totalZero == 0) {
            totalPath+=1;
        }

        if(grid[i][j] == 0) {
            totalZero= totalZero - 1;
        }

        let temp = grid[i][j];
        grid[i][j] = 99;

        dfs(grid, i+1, j, totalZero)
        dfs(grid, i-1, j, totalZero)
        dfs(grid, i, j+1, totalZero)
        dfs(grid, i, j-1, totalZero)

        grid[i][j] = temp;
    }
    
    for(let i=0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 0) {
                totalZero += 1;
            }
        }
    }
    
    for(let i=0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1) {
                dfs(grid, i, j, totalZero);
            }
        }
    }
    
    return totalPath;
};

let result = uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]);

console.log(result);