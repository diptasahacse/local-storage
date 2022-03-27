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
addPerson("Dipta")

console.log(person)