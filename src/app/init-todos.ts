export class Init{
    load(){
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No todos found. Creating ...');
            var todos = [
                { text: 'Pick up milk'},
                { text: 'Pick up son from school'},
                { text: 'Pick up wife from work'},
                { text: 'Pick up groceries'}
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return
        }else{
            console.log('Found todos');
        }
    }
}