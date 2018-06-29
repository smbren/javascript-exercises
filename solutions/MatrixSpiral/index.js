// 1
const matrix = (n) => {
  const results = [];

  // To results array push n empty arrays.
  for (i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row/
    for (i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter += 1;
    }

    startRow++;

    // Right column.
    for (i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter += 1;
    }

    endColumn--;

    // Bottom row.
    for (i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    endRow--;

    // Left column.
    for (i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }

    startColumn++;
  }

  return results;
}
