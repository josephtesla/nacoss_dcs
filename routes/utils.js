const User = require('../Models/User')

const parseCookie = (cookie) => {
  const cookieArr = cookie.split(";");
  let coookieObject = {}
  cookieArr.forEach(cookietype => {
    const key = cookietype.split('=')[0].trim();
    const value = cookietype.split('=')[1].trim();
    coookieObject[`${key}`] = value;
  });

  return coookieObject;
}

function checkRememberMe(req, res, next) {
  const { cookie } = req.headers;
  if (parseCookie(cookie).rememberId){
    const cookieuser = parseCookie(cookie).rememberId.split("22")[1].replace('%','').trim();
    User.findById(cookieuser)
    .then(user => {
      if (user){
        req.login(user, (err) => {
          if (err) { return next(err); }
          return res.redirect('/');
        });
      }
      else{
        return res.clearCookie('rememberId').redirect('/users/login')
      }
    })
  }
  else{
    next();
  }
} 


const matric_no_isValid = matric_no => {
  if (matric_no.length == 15){
    let matric_no_divided = matric_no.split("/");
    console.log(matric_no_divided)
    if (matric_no_divided[0] == "F"){
      if (matric_no_divided[1] == "ND" || matric_no_divided[1] == "HD" ){
        if (matric_no_divided[2] > 0 && matric_no_divided[2] < 99){
          return true;
        }
      }
    }
  }
  return false;
}

const timeSince = (since) => {
  since = since/1000;
  var chunks = [
      [60 * 60 * 24 * 365, 'year'],
      [60 * 60 * 24 * 30, 'month'],
      [60 * 60 * 24 * 7, 'week'],
      [60 * 60 * 24 , 'day'],
      [60 * 60, 'hour'],
      [60, 'min'],
      [1,'second']
  ];

  for (var i = 0,j = chunks.length; i < j; i++){
      var seconds = chunks[i][0];
      var name = chunks[i][1];
      var count = Math.floor(since/seconds);
      if (count  != 0){
          break;
      }
  }
  var time = [];
  name = (count == 1)?name:`${name}s`;
  time.push(count);
  time.push(name);
  var newTime = `${time[0]} ${time[1]} ago`;
  return newTime;
}


module.exports = {  parseCookie, checkRememberMe , matric_no_isValid, timeSince};
