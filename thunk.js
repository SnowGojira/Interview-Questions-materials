function delayMe(delay,cb){
  console.log(`request: {delay}`);
  setTimeout(cb,delay);
}

function a(){
  console.log("a");
}

function b(){
  console.log("b");
}

function c(){
  console.log("c");
}

function d(){
  console.log("d");
}
//************create a thunk******
function getThunk(delay){
  let time,fn;
  delayMe(delay,function(){
    if(fn) fn();
    else time = delay;
  })
  
  return function(cb){
    if(delay) cb();
    else fn = cb;
  }
}

const th1 = getThunk(400);
const th2 = getThunk(300);
const th3 = getThunk(200);
const th4 = getThunk(100);

th1(function(){
  a();
  th2(function(){
    b();
    th3(function(){
      c();
      th4(function(){
        d();
      })
    })
  })
})
