let person = JSON.parse(localStorage.getItem('users-data')) == null ? {} : JSON.parse(localStorage.getItem('users-data'));
const addPerson = (name)=>{
    // if(person[name]){
    //     let before =  person[name];
    //     person[name] = before + 1;

    // }
    // else{
    //     person[name] = 1;

    // }

    if(name in person){
        let before =  person[name];
        person[name] = before + 1;

    }
    else{
        person[name] = 1;

    }
    localStorage.setItem("users-data",JSON.stringify(person));
    
}
const removePerson = (name)=>{
    if(name in person){
        if(person[name] > 1){
            person[name] = person[name] - 1;
        }
        else{
            delete person[name];
        }
        

    }
    else{
        console.log("User Not Exist")

    }
    localStorage.setItem("users-data",JSON.stringify(person));
    
}


