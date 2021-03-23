const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


//==========1.console.log
function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}
//輸出任務
exports.do = defaultTask;


//=============== 2.任務流程

//任務a
function funcA(cb){
    //任務a
    console.log('任務A');
    cb();
}
//任務b
function funcB(cb){
    //任務b
    console.log('任務B');
    cb();
}

exports.doA = series(funcA, funcB);//任務串聯
exports.doB = parallel(funcA, funcB);//任務並行


//=================3. 打包 src / dest

function moveFile(){
    return src('./js/main.js').pipe(dest('output'));
}

exports.cp = moveFile;//輸出任務