var vm = new Vue({
    el: ".content",
    data: {
        board: [],
        selected_unit: null,
        selected_btn: null
    },
    mounted: function () {
        this.board = initBoard();
    },
    methods: {
        clickUnit: function (row, column) {
            if (this.selected_unit && row === this.selected_unit.row && column === this.selected_unit.column) {
                this.selected_unit = null;
            } else {
                this.selected_unit = {
                    row: row,
                    column: column
                };
            }
        },
        clickNumBtn: function (num) {
            this.selected_btn = num;
        },
        disSelect: function () {
            this.selected_unit = null;
            this.selected_btn = null;
        }
    }
});