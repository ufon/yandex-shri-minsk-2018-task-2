(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
    var isIsland = root.SHRI_ISLANDS.isIsland;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */

     
    function visualizeSolution(map) {

        return new Promise((resolve, reject) => {

            let matrix = root.SHRI_ISLANDS.deepClone(map);

            let islands = 0;

            document.querySelector('.map__res').innerHTML = 'Count: 0';

            map.forEach((row, i) => {
                setTimeout(() => {
                    row.forEach((item, j) =>
                        setTimeout(() => {
                            if (isIsland(map, i, j, true)) {
                                islands++;
                                document.querySelector('.map__res').innerHTML = 'Count: ' + islands;
                            }
                        }, 500 * j)
                    )
                }, 2000 * i);
            })

            setTimeout((map) => {

                let outer = document.querySelector('.outer');
                
                while(outer.firstChild)
                    outer.removeChild(outer.firstChild);

                outer.appendChild(root.SHRI_ISLANDS.render(matrix, islands));

                resolve();

            }, (2000 * map.length + 500))

        });

    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;

})(this);
