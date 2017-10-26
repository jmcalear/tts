var weapons = ['rock' , 'paper', 'scissors'];
var user1Wins=0;
var user2Wins=0;
var user1 = 'User1';
var user2 = 'User2';
do{
  var user1WeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
  var user2WeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
  var winner = '';
  switch (user1WeaponOfChoice) {
    case 'rock':
      switch (user2WeaponOfChoice) {
        case 'paper':
          winner = user2;
          break;
        case 'scissors':
          winner = user1;
          break;
      }
      break;
    case 'paper':
    switch (user2WeaponOfChoice) {
      case 'scissors':
        winner=user2;
        break;
      case 'rock':
        winner=user1;
        break;
    }
      break;
    case 'scissors':
    switch (user2WeaponOfChoice) {
      case 'rock':
        winner=user2;
        break;
      case 'paper':
        winner=user1;
        break;
    }
      break;
  }
  console.log('User1 hand: ' + user1WeaponOfChoice);
  console.log('User2 hand: ' + user2WeaponOfChoice);
  if (winner===user1){
    user1Wins++;
    console.log('User1 wins!!');
  }else if(winner===user2){
    user2Wins++;
    console.log('User2 wins!!');
  }
  else{
    console.log('Draw');
  }
}while(user1Wins<3 && user2Wins<3)
if(user1Wins>=3){
  console.log('User1 is tourney champ!!');
}
else{
  console.log('User2 is tourney champ!!')
}
