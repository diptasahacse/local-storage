const person = {};
const addPerson = (name)=>{
    if(person[name]){
        let before =  person[name];
        person[name] = before + 1;

    }
    else{
        person[name] = 1;

    }
    
}
const UserArr = ["Dipta","Keya","Porshi","Porosh","Pollob","Keya","Modi","Porshi","Dipta",'Porshi'];

for (const iterator of UserArr) {
    addPerson(iterator);
}
console.log(person)