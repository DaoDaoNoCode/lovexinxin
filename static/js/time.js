function timeFn() {
  //di作为一个变量传进来
  //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
  var year = 2019;
  var month = 3;
  var day = 24;
  var hour = 22;
  var minute = 10;
  var second = 0;
  var millisecond = 0;
  var dateBegin = new Date(
    year,
    month - 1,
    day,
    hour,
    minute,
    second,
    millisecond
  ); //将-转化为/，使用new Date
  var dateEnd = new Date(); //获取当前时间
  var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
  var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
  var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数 //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数 //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.floor(leave3 / 1000);
  document.getElementById("result").innerHTML =
    dayDiff + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒";
}
timeFn();
setInterval(timeFn, 1000);
