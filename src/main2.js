// express 란?
// node.js를 사용해서 쉽게 서버 구성을 할수 있게 만들어주는 클래스와 라이브러리 집합

// express 설치 명령어
// ----------------------------------------------
// npm i express
// ----------------------------------------------

// express를 가져와서 변수에 담아줌
const express = require("express");

// ejs는 node.js와 express에서 많이 사용하고 있는 템플릿엔진
// ejs는 우리가 쓰는 기존 html문법을 사용하면서 <% %> 이런 문법을 사용해서 크게 멋어나지 않게 서버와 데이터를 사용할수 있는 장점이 있다.
// ejs 설치 명령어
// -----------------------
// npm i ejs
// -----------------------
const ejs = require("ejs");

// fs는 파일 읽기 쓰기를 쉽게 도와주는 모듈(원래 있는 모듈이라 설치 안해도 됨)
const fs = require("fs");

// mysql
// 설치 명령어
// --------------------------------------
// npm i mysql12
// --------------------------------------
const mysql = require("mysql2");

// body-parser는
// 요처오가 응답사이에서 공통적인 기능을 해주는 미들웨어이다.
// 데이터를 body라는 객체 안에 담아서 요청 응답을 받을 수 있게 해준다고 보면 된다.
// 설치 명령어
// ----------------------------------------------
// npm i body-parser
// ----------------------------------------------
const bodyParser = require("body-parser");

const temp = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "test5",
});

temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
    temp.query(sql);
  } else {
    console.log(res);
  }
});

// express 함수를 실행해서 반환 값을 app에 담아줌
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
  // extended : false
  // true : express에 기본 내장된 쿼리 스티림 모듈을 사용한다.
  // false : 쿼리 스트림 모듈의 기능이 좀더 확장된 qs 모듈을 사용한다.
);

// 포트 정해줌
const PORT = 4000;

// app.get();
// app.post();

// app.get('요청 url')
app.get("/", (req, res) => {
  // http에선 end 함수로 보내고 끝냈지만
  // express에선 send로 보내고 끝낸다.
  // fs 모듈로 파일을 읽어온다.
  // fs 모듈이 readFile 파일을 읽어오는 함수
  // 매개변수 첫번째 파일의 경로이름
  // 두번째는 인코딩 방식
  // 세번째는 콜백함수
  fs.readFile("src/list.html", "utf-8", (err, data) => {
    temp.query("SELECT * FROM products", (err, result) => {
      // ejs render 함수로 해당 불러온 파일은 그려준다
      // ejs 두번째 매개변수로 데이터를 전달할수 있다.
      res.send(
        ejs.render(data, {
          data: result,
        })
      );
    });
  });
});

// case문을 쓰지 않고 간단하게 복사해서 쓸수 있다.
app.get("/insert", (req, res) => {
  fs.readFile("src/insert.html", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.post("/insert", (req, res) => {
  const data = req.body;
  // body 객체 안에 form에서 보내준 데이터는 input등의 name이 키값
  // 해당 input의 value값으로 전달된다.
  const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
  temp.query(sql, [data.name, data.number, data.series], () => {
    // url 경로를 redirect 함수의 매개변수 경로로 이동한다.
    res.redirect("/");
  });
  //   console.log(data);
  //   res.send(data);
});
// app.get("/insert", (req, res) => {});

app.listen(PORT, () => {
  console.log("server start");
});
