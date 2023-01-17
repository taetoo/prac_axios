// const express = require("express"); 
// const app = express();
// const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mysql = require("mysql"); // mysql 모듈 사용

// var connection = mysql.createConnection({
//     host : "10.7.10.10",
//     user : "integ", //mysql의 id
//     password : "Dlszbqjtm!23", //mysql의 password
//     database : "youth_house", //사용할 데이터베이스
// });

// connection.connect();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// app.get('/', (req, res) =>{
//     req.send('혁이는 코딩 중!')
    
// })

// app.post("/idplz", (req,res)=>{
//     const test = req.body.test;
//     // console.log(req.body);
//     connection.query("INSERT INTO test (test_body) values (?)",[test],
//     function(err,rows,fields){
//         if(err){
//             console.log("실패");
//             // console.log(err);
//         }else{
//             console.log("성공");
//             // console.log(rows);
//         };
//     });  
// });

// app.get("/get", (req,res)=>{
//     const test1 = req.body.test;
//     // console.log(req.body);
//     connection.query("select * from test where test_key = '8'",[test1],
//     function(err,rows,fields){
//         if(err){
//             console.log("실패");
//             // console.log(err);
//         }else{
//             console.log("성공");
//             // console.log(rows);
//         };
//     });  
// });

// app.listen(port, ()=>{
//     console.log(`Connect at http://localhost:${port}`);
// })

const express = require("express"); // npm i express | yarn add express
const cors    = require("cors");    // npm i cors | yarn add cors
const mysql   = require("mysql");   // npm i mysql | yarn add mysql
const app     = express();
const PORT    = 3001; // 포트번호 설정

// MySQL 연결
const db = mysql.createPool({
    host: "10.7.10.10", // 호스트
    user: "integ",      // 데이터베이스 계정
    password: "Dlszbqjtm!23",      // 데이터베이스 비밀번호
    database: "youth_house",  // 사용할 데이터베이스
});

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`Connect at http://localhost:${PORT}`);
});
app.get("/name-list", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    const sqlQuery = "SELECT * FROM test where test_key='8'";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});