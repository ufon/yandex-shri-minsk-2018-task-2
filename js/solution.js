(function(root) {
  var WATER = root.SHRI_ISLANDS.WATER;
  var ISLAND = root.SHRI_ISLANDS.ISLAND;

  /**
   * Функция находит кол-во островов на карте
   * ВАЖНО! Сигнатуру функции изменять нельзя!
   *
   * @param {number[][]} map карта островов представленная двумерной матрицей чисел
   * @returns {number} кол-во островов
   */
  function solution(map) {
    let matrix = deepClone(map);

    let islands = 0;

    map.forEach((row, i) =>
      row.forEach(
        (item, j) => (islands += isIsland(matrix, i, j, false) ? 1 : 0)
      )
    );

    return islands;
  }

  const deepClone = array =>
    Array.from(array, item => (Array.isArray(item) ? deepClone(item) : item));

  function isIsland(matrix, i, j, visualize) {
    let di = [0, 0, 1, -1]; //directions for i
    let dj = [1, -1, 0, 0]; //directions for j

    if (i < 0 || i >= matrix.length || isNaN(i)) return false;
    if (j < 0 || j >= matrix[0].length || isNaN(j)) return false;

    let island = matrix[i][j] == ISLAND ? true : false;

    matrix[i][j] = WATER;

    if (visualize) {
      let el = document.querySelector(
        '[data-i="' + i + '"][data-j="' + j + '"]'
      );
      el.classList.add("map__cell_current");

      setTimeout(() => {
        el.classList.remove("map__cell_current", "map__cell_island");
        el.classList.add("map__cell_water");
      }, 500);
    }

    if (island)
      [1, 2, 3, 4].forEach((item, index) =>
        isIsland(matrix, i + di[index], j + dj[index], visualize)
      );

    return island;
  }

  root.SHRI_ISLANDS.solution = solution;
  root.SHRI_ISLANDS.isIsland = isIsland;
  root.SHRI_ISLANDS.deepClone = deepClone;
})(this);
