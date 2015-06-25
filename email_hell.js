var inventory = {};

var email_log = require('./email_log.json');

// console.log(email_log);

for (i = 0; i < email_log.emails.length; i++){
  //email_log.push(inventory);

  var emails = email_log.emails[i].email;

  console.log(emails);

  if (!inventory[emails]){
  inventory[emails] = 1;

  }else{

  inventory[emails] += 1;

  }
}

console.log(inventory);