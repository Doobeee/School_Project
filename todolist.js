window.onload = function(){
    new Vue ({
        el: "#demo",
        data: {
            todoList: [{ text: 'Wash Dishes', checked: true},
                   { text: 'Mop Floor', checked: false}],
            headLine: 'Productivity List',
            newTodo: ''
        },
        methods: {
            addTodo: function(){
                var temp;
                temp = this.newTodo;
                this.todoList.push({
                    text: temp,
                    checked: false
                });
                this.newTodo = "";
            }      
        }
    });
}