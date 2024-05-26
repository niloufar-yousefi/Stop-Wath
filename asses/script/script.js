let _miliseconod = document.getElementById('_miliseconod')
let _second = document.getElementById('_second')
let _minutse = document.getElementById('_minutse')
let _miliSec = 0
let _sec = 0
let _min = 0
let _time



function _start() {
     _time = setInterval(() => {
        _miliSec++
        _miliseconod.innerHTML = _miliSec
        if(_miliSec == 100){
            _miliSec = 0
            _sec++
            _second.innerHTML = _sec
            if(_sec <= 9){
                _second.innerHTML ='0' + _sec
            }else{
             _second.innerHTML = _sec
            }
            if(_sec == 60){
                _miliSec = 0
                _sec = 0
                _min++
                _minutse.innerHTML = _min
                if(_min <= 9){
                   _minutse.innerHTML = _min = '0' + _min
                }else{
                    _minutse.innerHTML = _min
                }
            }
        }
    }, 10);
}

function _stop() {
  clearInterval(_time)  
}

function _reset() {
    _miliSec = 0
    _sec = 0
    _min = 0
    _miliseconod.innerHTML = _miliSec
    _second.innerHTML = _sec
    _minutse.innerHTML = _min
    clearInterval(_time) 
    setTimeout(() => {     
        _start()
    }, 1000);
}
