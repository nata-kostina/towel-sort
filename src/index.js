module.exports = function towelSort(matrix) {
    if (matrix!=undefined && Array.isArray(matrix) && matrix.length > 0) {
        let res = [];
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 == 0)
                res.push(matrix[i]);
            else
                res.push(matrix[i].reverse());
        }
        return (res.reduce(function (flat, current) {
            return flat.concat(current);
        }, []));
    }
    else
        return [];
}
