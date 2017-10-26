var myModule = {
    name:'tecWang',
    age:23,
    sayName:function(){
        alert(this.name);
    },
    setName:function(newName){
        this.name = newName;
    }
};
myModule.setName("若若");
myModule.sayName();