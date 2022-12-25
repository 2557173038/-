//同名

var a=1
{
    function a(){}
    a=2
    function a(){}
    a=4 //挤出块外
    function a(){}
    a=6
    console.log('内部a',a)
}
console.log('外部a',a)//内部最后一个函数前面的变量值

// 6,4