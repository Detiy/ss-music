

/**
 * 封装cookie
 */
const Cookie = {
  set(key, value, expiredays = 0) {
    const now = new Date();
    now.setHours(23, 59, 59, 59);
    const timeStamp = now.getTime() + expiredays * 24 * 60 * 60 * 1000;
    let date = new Date(timeStamp);
    document.cookie = key + "=" + JSON.stringify(value) + ";" + "expires=" + date;
  },
  get(key) {
    let value = null;
    const curKey = key;
    if (document.cookie.length) {
      for (let arr = document.cookie.split(";"), i = 0; i < arr.length; i++) {
        const keyLen = curKey.length + 1;
        const ck = arr[i].replace(/(^\s*)|(\s*$)/g, "");
        if (ck.substring(0, keyLen) === curKey + "=") {
          value = JSON.parse(ck.substring(keyLen));
          break;
        }
      }
    }
    return value;
  },
  remove(key) {
    if (document.cookie.length) {
      let d = new Date();
      d.setTime(d.getTime() - 24 * 60 * 60 * 1000);
      document.cookie = key + "=;" + "expires=" + d;
    }
  },
  setTodayCookies(name, value) {
    var curDate = new Date();
    //当前时间戳
    var curTamp = curDate.getTime();
    //当前日期
    var curDay = curDate.toLocaleDateString();
    var brow = $.browser;
    var curWeeHours = 0;
    curWeeHours = new Date(curDay).getTime() - 1;
    //当日已经过去的时间（毫秒）
    var passedTamp = curTamp - curWeeHours;
    //当日剩余时间
    var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
    var leftTime = new Date();
    leftTime.setTime(leftTamp + curTamp);
    //创建cookie
    document.cookie = name + "=" + JSON.stringify(value) + ";expires=" + leftTime.toGMTString() + ";path=/";
  }
};
export default Cookie;
