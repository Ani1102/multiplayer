class Game{
constructor(){   
}
getState(){
    var gameStateref = databaseref("gamestate");
    gameStateref.on("value",function(data){gamestate=data.val();})


}
update(state){
databaseref("/").update({
    gamestate:state
    
})
}
start(){
    if(gamestate == 0){
        form = new form()
        form.display();
    }
}



}