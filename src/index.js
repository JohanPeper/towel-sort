
// You should implement your task here.
    if (!Array.prototype.flat) {
        Array.prototype.flat = function(depth) {
          var flattened = [];
      
          function flatten(arr, currentDepth) {
            for (var i = 0; i < arr.length; i++) {
              if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1);
              } else {
                flattened.push(arr[i]);
              }
            }
          }
      
          flatten(this, 0);
      
          return flattened;
        };
      }
      // Polyfill ^^^^^
module.exports = function towelSort(matrix) {


    if (matrix == undefined) {
        return []
    }
    else {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i] = matrix[i].reverse();
        }

        return matrix.flat(Infinity);
    }
}
