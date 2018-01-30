(function (root) {
    var map = root.SHRI_ISLANDS.MAP;
    var count = root.SHRI_ISLANDS.solution(map);

    document.querySelector('.outer').appendChild(
        root.SHRI_ISLANDS.render(map, count)
    );

    document.querySelector('.visualize').addEventListener("click", function(){

        this.disabled = true;

        let matrix = root.SHRI_ISLANDS.deepClone(map);

        root.SHRI_ISLANDS.visualizeSolution(map).then(() => {

            map = matrix; //return original

            document.querySelector('.visualize').disabled = false;
        });
    
    });
    
})(this);
