let Todo=[];

while(true){

    let input=prompt("Enter input values \n [1] Add Task \n [2] Display Task \n [5]Exit")

    if(input=="1"){
        let task=prompt("Enter Task Here");
        Todo.push(task)
    }
    else if(input=="2"){

        str=``;
        for(let i=0;i<Todo.length;i++)
        {
            str+=`${i+1} ${Todo[i]} \n`
        }
        alert(str)
    }
    else if(input=="5"){
        break
    }
    else("Invalid entry try again")
}