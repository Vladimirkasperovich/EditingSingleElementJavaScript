//Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
/*let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.addEventListener('input', function(){
 elem.textContent = this.value;
});*/




//Самостоятельно, не подсматривая в мой код, решите описанную задачу.
/*let elem = document.querySelector('#elem');

elem.addEventListener('click', function () {
    let input = document.createElement('input');
    input.value = elem.textContent;

    input.addEventListener('blur', function () {
        elem.textContent = this.value;
        this.remove();
    });
    elem.parentElement.appendChild(input);
});*/



//Самостоятельно, не подсматривая в мой код, решите описанную задачу.
/*let elem = document.querySelector('#elem');

elem.addEventListener('click', function func(){
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = '';

    input.addEventListener('blur', function(){
        elem.textContent = input.value;
        elem.addEventListener('click', func);
    });

    elem.removeEventListener('click', func);
    elem.appendChild(input);
});*/



//Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
/*let elems = document.querySelectorAll('#elem li');

for (let elem of elems){
    elem.addEventListener('click', function func(){
      let input = document.createElement('input');
      input.value = elem.textContent;
      elem.textContent = '';
       
      input.addEventListener('blur', function(){
        elem.textContent = input.value;
        elem.addEventListener('click', func);
      });

      elem.removeEventListener('click', func);
      elem.appendChild(input);
    });
}*/



//Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
/*let tables = document.querySelectorAll('#table td');

for (let table of tables) {
    table.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = table.textContent;
        table.textContent = '';

        input.addEventListener('blur', function () {
           table.textContent = input.value;
           table.addEventListener('click', func);
        });

        table.removeEventListener('click', func);
        table.appendChild(input);
    });
}*/ 




