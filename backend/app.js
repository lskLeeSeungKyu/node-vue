const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const mybatisMapper = require('mybatis-mapper');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// 익스프레스 서버 라이브러리 사용
var app = express();
dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));









//MYSQL커넥션
const connection = mysql.createConnection({  
  host: 'localhost',
  user: 'root',
  database: 'nodejs',
  password : '1234',
  port: 3306,
});

//마이바티스매핑
mybatisMapper.createMapper([ './testMapper.xml' ]);  

//노트생성
app.post('/NoteInsert', (req, res) => {
  var param = {
    board_title : req.body.title,
    board_content : req.body.content,
  }
  const format = {language: 'sql', indent: '  '};
  const query = mybatisMapper.getStatement('testMapper', 'NoteInsert', param, format);
  connection.query(query, (error, results, fields) => { 
    if (error) {
        console.log(error);
    }
    const result = results
    console.log(result);
    res.status(200).json({ message: 'good'})
});
})

//노트정보
app.post('/NoteSelect', (req, res) => {
  const format = {language: 'sql', indent: '  '};
  const query = mybatisMapper.getStatement('testMapper', 'NoteSelect', format);
  connection.query(query, (error, results, fields) => { 
    if (error) {
        console.log(error);
    }
    const result = results
    console.log(result);
    res.status(200).json({ result })
});
})
//노트삭제
app.post('/NoteDelete', (req, res) => {
  console.log(req.body.content);
  var param = {
    board_content: req.body.content,
  }
  const format = {language: 'sql', indent: '  '};
  const query = mybatisMapper.getStatement('testMapper', 'NoteDelete', param, format);
  connection.query(query, (error, results, fields) => { 
    if (error) {
        console.log(error);
    }
    const result = results
    console.log(result);
    res.status(200).json({ message: 'good'})
  })
})
//회원가입
app.post('/Register', (req, res) => {
  console.log(req.body.user_id);
  console.log('테스트');  
  var param = {
    user_id: req.body.user_id,
    user_pw: req.body.user_pw,
  }
  // bcrypt 암호 해쉬화
  bcrypt.hash(param.user_pw, 10, (error, hash) => {
    param.user_pw = hash
    console.log(param)
    const format = {language: 'sql', indent: '  '};
    const query = mybatisMapper.getStatement('testMapper', 'Register', param, format);
    connection.query(query, (error, results, fields) => { 
    if (error) {
        console.log(error);
    }
    const result = results
    console.log(result);
    res.status(200).json({ message: 'good'})
   })
  })
})
//로그인
app.post('/Login', (req, res) => {
  var param = {
    user_id: req.body.user_id,
  }
  const format = {language: 'sql', indent: '  '};
  const query = mybatisMapper.getStatement('testMapper', 'Login', param, format);
  connection.query(query, (error, results, fields) => { 
    if (error) {
        console.log(error);
    }
    const result = results
    res.status(200).json(result)
  })
})
//입력비번/암호화비번 체크
app.post('/PWcheck', (req, res) => {
  bcrypt.compare(req.body.user_pw, req.body.DBuser_pw, (error, result) => {
    // 일치 한다면
    if(result) {
      //jwt토큰생성

      //토큰 생성까지만함 verify안할거임
      const token = jwt.sign({ data: 'hi' }, process.env.SECRET_KEY, { algorithm: 'HS256' }) // default RS256으로 하면 에러남
      res.status(200).json({ token })
    }
    else {
      res.status(500).json({ message: 'fail' })
    }
  })
})













app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;