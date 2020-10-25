// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let x = [];
    matrix.forEach((massiv, index) => {
        if (index % 2 === 0) x = [...x, ...massiv]
        else x = [...x, ...massiv.reverse()]
    });
    return x;
}