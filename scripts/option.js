var initBoard = (function () {
    var board = [];
    for (var i = 0; i < 9; i++) {
        board[i] = [];
        for (var j = 0; j < 9; j++) {
            board[i][j] = {
                num: null,
                default: false
            };
        }
    }
    return board;
})();

function fillNum(option, row, column) {
    //判断待填充的单元是否为本局游戏的题目
    if (!vm.board[row][column].default) {
        var num = option;
        if (option === 'X') {
            num = null;
        }
        if (vm.board[row][column].num === num) {
            vm.board[row][column].num = null;   //如果要输入的数字与现有的相同，则改为清空单元格
        } else {
            vm.board[row][column].num = num;
        }
    }
}