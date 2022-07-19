// mysql -u 접속할 유저 이름 -p
// 패스워드 입력
// 현재 있는 데이터 베이스 리스트 보는 쿼리문
// --------------------------
// show databases;
// --------------------------

// 데이터 베이스 하나 만들기 쿼리문
// ----------------------------------------------
// CREATE DATABASE (테이블 명) CHARACTER SET utg8;
// ----------------------------------------------

// 사용할 데이터베이스 선택
// --------------------------------
// use 데이터베이스명;
// --------------------------------

// 테이블에 칼럼 추가 쿼리문
// ---------------------------------------------------------------------------------
// INSERT INTO '데이터베이스 이름','테이블 이름' ('id','content') VALUES ('1','안녕');
// ('id','content') 순서대로
// ('i','안녕') 순서대로 추가할 밸유들
// ---------------------------------------------------------------------------------

// 테이블에 컬럼 제거 쿼리문
// -----------------------------------------------------------------
// DELETE FROM '데이터 베이스 이름','테이블 이름' WHERE ('id' = '1');
// WHERE ('id' = '1') 어디에? 아이디가 1번인 컬럼을
// -----------------------------------------------------------------

// 테이블에 컬럼 수정 쿼리문
// -------------------------------------------------------------------------------------------
// UPDATE '데이터 베이스 이름','테이블 이름' SET 'id' = '2','content'='하세요' WHERE ('id'='1');
// 변경 내용 SET 'id' = '2','content'
// WHERE ('id'='1') 어디에? 아이디가 1번인 컬럼
// -------------------------------------------------------------------------------------------