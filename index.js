function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}//end of function

  BoardMember.prototype.veto = function(){
    return "No, I must disagree"
  } //end of veto

  BoardMember.prototype.approve = function(){
    return "You can do that!"
  } //end of approve

  BoardMember.prototype.doCharity = function(){
    return "I like to help people."
  } //end of do charity

  BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  } //end

  BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  } //end
