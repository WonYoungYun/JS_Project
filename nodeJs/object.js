/*
var f = function(){
    console.log(1+1);
    console.log(1+2);
  }
  var a = [f];
  a[0]();
   
  var o = {
    func:f
  }
  o.func();
*/
var q = {
    v1:'v12',
    v2:'v21',
    f1:function (){
      console.log(this.v1);
    },
    f2:function(){
      console.log(this.v2);
    }
}
   
q.f1();
q.f2();
  //함수는 state이자 동시에 값이다. 즉 인자이기 떄문에 배열과 객체에 함수를 담을 수 있다.
//firstclass