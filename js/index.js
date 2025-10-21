let Todo=[];

while(true){

    let input=prompt("Enter input values \n [1] Add Task \n [2] Display Task \n [3] Edit Task \n [4] Delete \n [5]Exit")

    //add task
    if(input==="1"){
        let task=prompt("Enter Task Here");
        Todo.push(task)
    }

    //display task
    else if(input==="2"){

        str=``;
        // for(let i=0;i<Todo.length;i++)
        // {
        //     str+=`${i+1} ${Todo[i]} \n`
        // }
        // alert(str)

        for(const[index,tsk] of Todo.entries()){

            str+=`[${index+1}]  ${tsk} \n`
        }
        alert(str)

    }
    
    //edit task

    else if(input==="3")
    {


        str=``
        for(const[index,tsk] of Todo.entries()){

            str+=`[${index+1}]  ${tsk} \n`
        }

        let edit=prompt(`${str} \n Enter id number and new task name like 'id,new_task(3,drink)'....!`).split(",")
        Todo[edit[0]-1]=edit[1]


    }

    //delete task
    else if(input==="4"){


          str=``
        for(const[index,tsk] of Todo.entries()){

            str+=`[${index+1}]  ${tsk} \n`
        }

     let del=prompt(`${str} \n Enter id delete the Task`)
      Todo.splice(del -1,1);
     

    }

    //exit
    else if(input=="5"){
        break
    }
    else("Invalid entry try again")
}