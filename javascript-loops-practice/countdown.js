/* exported countdown */
function countdown(number){
  const countdown=[];
  for(let i = number; i >= 0; i--){
    countdown.push(i);
  }
  return countdown;
};
