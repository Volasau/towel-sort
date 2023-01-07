// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) && matrix.length > 0) {
        return matrix.reduce((accum, curr, ind) => [
            ...accum,
            ...((ind + 1) % 2 === 0 ? curr.reverse() : curr),
        ]);
    }
    return [];
};
