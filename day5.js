function spotlightMap(grid) {
  // Helper function to get the value of an element at a given row and column
  function getValue(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return 0; // Return 0 for out-of-bounds elements (edge elements)
    }
    return grid[row][col];
  }

  // Create a new grid with the same dimensions as the input grid
  const newGrid = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));

  // Calculate the Spotlight Sum for each element in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      newGrid[i][j] =
        getValue(i - 1, j - 1) +
        getValue(i - 1, j) +
        getValue(i - 1, j + 1) +
        getValue(i, j - 1) +
        getValue(i, j) +
        getValue(i, j + 1) +
        getValue(i + 1, j - 1) +
        getValue(i + 1, j) +
        getValue(i + 1, j + 1);
    }
  }

  return newGrid;
}

// Test cases
console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); // Output: [ [ 12, 21, 16 ], [ 27, 45, 33 ], [ 24, 39, 28 ] ]

console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
])); // Output: [ [ 21, 31, 28, 24, 14 ], [ 21, 31, 28, 24, 14 ] ]

console.log(spotlightMap([[3]])); // Output: [[3]]
