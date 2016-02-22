function makeIncrementer(){
  var counter = 0;

  function getCounter(){
    return counter;
  }

  return {
    increment: function(amount){
      counter += amount;
    },
    minus: function decrement(amount){
      counter -= amount;
    },
    count: getCounter
  };
}

var foo = makeIncrementer();

foo.increment(3);
foo.minus(1);

console.log(foo.count());
