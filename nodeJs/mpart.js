var M = {
    v:'V',
    f:function(){
        console.log(this.v);
    }
}


module.exports = M;
//이 js파일안의 지정한 값을 외부의 다른 js파일에서도 사용 할 수 있도록 한다.
//require을 통해 모듈을 load가능