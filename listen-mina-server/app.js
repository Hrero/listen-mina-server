var createError = require('http-errors');
var express = require('express');
var swig = require('swig');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');  //加载body-parser,用来处理提交的post数据
var logger = require('morgan');

var app = express();

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// view jade
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use('/public',express.static(__dirname + '/public'));
//配置应用模板
//定义当前应用所使用的模板引擎
//第一个参数：模板引擎的名称，同时也是模板文件的后缀,第二个参数表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);

//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views','./view');

//注册所使用的模板引擎，第一个参数必须是view engine, 第二个参数和app.engine中的一个参数是一致的
app.set('view engine','html');

//在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false});
app.use(bodyParser.urlencoded({extended:true})); //设置bodyparser,这样就可以在req上绑定一个body的属性,里面保存的是post过来的数据
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//app.use('/admin',require('./routes/admin'));
app.use('/api',require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
