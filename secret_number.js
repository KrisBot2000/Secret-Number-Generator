//var secretNumber = function(){
'use strict';
module.exports = function() {



const SAME_NUM = Math.floor(Math.random()*1000001);

  return function(){
    return SAME_NUM;
  };
};