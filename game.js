var player1=prompt("Enter player 1 name , you will have blue chip");
var player2=prompt("Enter player 2 name , you will have red chip");

var player1_color="blue";
var player2_color="red";


var game_on =true;

var table=$('table tr');

function changecolor(row,col,color){
  return table.eq(row).find('td').eq(col).find('button').css('background-color',color);
}

function returncolor(row,col){
  return table.eq(row).find('td').eq(col).find('button').css('background-color');
}

function checkbottom(col){
  var colorreport = returncolor(5,col);
  for(var i=5;i>=0;i--){
    colorreport=returncolor(i,col);
    if(colorreport==='rgb(128, 128, 128)'){
      return i;
    }
  }
}

function colormatch(one,two,three,four){
  return (one==two && one==three &&one==four && one!=undefined &&one!='rgb(128, 128, 128)');
}

function horizontal(){
  for(var i=0;i<6;i++){
    for(var j=0;j<7;j++){
      if (colormatch(returncolor(i,j),returncolor(i,j+1),returncolor(i,j+2),returncolor(i,j+3))===true){
        return true;
      }else{
        continue;
      }
    }
  }
}

function vertical(){
  for(var i=0;i<7;i++){
    for(var j=0;j<6;j++){
      if(colormatch(returncolor(j,i),returncolor(j+1,i),returncolor(j+2,i),returncolor(j+3,i))===true){
        return true;
      }
    }
  }
}

var currentplayer=1;
var currentname=player1;
var currentcolor=player1_color;

$('h4').text(currentname+" Its your turn , Click on any column");

$('.board button').on('click',function(){

  var col = $(this).closest('td').index();

  var bottomavail = checkbottom(col);

  changecolor(bottomavail,col,currentcolor);

  if(horizontal()  || vertical()){
    $('h1').text(currentname + " You won");
    $('h3').fadeOut('300000');
    $('h4').fadeOut('300000');
    return 0;
  }

  currentplayer=currentplayer*-1;
  if(currentplayer===1){
    currentname=player1;
    $('h4').text(currentname+" Its you turn");
    currentcolor=player1_color;
  }else{
    currentname=player2;
    $('h4').text(currentname+"Its you turn");
    currentcolor=player2_color;
  }


})
