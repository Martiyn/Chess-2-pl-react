const diagonalDirectionTLBR = require('./diagonalTopLeftBottomRight.json');
const diagonalDirectionTRBL = require('./diagonalTopRightBottomLeft.json');
const rowDirection = require('./row.json');
const columnDirection = require('./column.json');

const isSameRow = (src,dest) => {
    return !!(rowDirection[src] && rowDirection[src][dest]);
}

const isSameColumn = (src, dest) => {
    return !!(columnDirection[src] && columnDirection[src][dest]);
}

const isSameDiagonal = (src, dest) => {
    return !!((diagonalDirectionTLBR[src] && diagonalDirectionTLBR[src][dest]) ||
    (diagonalDirectionTRBL[src] && diagonalDirectionTRBL[src][dest]))
}

// need to figure out how to check if the path is clear or not

module.exports = {
    isSameRow,
    isSameColumn,
    isSameDiagonal,
    
}