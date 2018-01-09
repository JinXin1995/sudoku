function initBoard() {
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
}