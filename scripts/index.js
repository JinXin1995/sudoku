var vm = new Vue({
    el: ".content",
    data: {
        board: initBoard,
        selected_unit: null,    //选中的单元格
        selected_btn: null, //选中的按钮
        selected_num: null  //选中的数字
    },
    // mounted: function () {
    //     this.board = initBoard();
    // },
    methods: {
        clickUnit: function (row, column) {
            if (this.selected_btn) {
                fillNum(this.selected_btn, row, column);
            } else if (this.selected_unit && row === this.selected_unit.row && column === this.selected_unit.column) {
                this.selected_unit = null;
                this.selected_num = null;
            } else {
                this.selected_unit = {
                    row: row,
                    column: column
                };
                if (this.board[row][column].num != null) {
                    this.selected_num = this.board[row][column].num;
                }
            }
        },
        clickBtn: function (option) {
            if (this.selected_unit) {
                fillNum(option, this.selected_unit.row, this.selected_unit.column);
            } else if (this.selected_btn === option) {
                this.selected_btn = null;
                this.selected_num = null;
            } else {
                this.selected_btn = option;
                if (typeof option === 'number') {
                    this.selected_num = option;
                } else {
                    this.selected_num = null;
                }
            }
        },
        disSelect: function () {
            this.selected_unit = null;
            this.selected_btn = null;
            this.selected_num = null;
        }
    }
});