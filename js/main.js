console.log('Hello Parcel')

async function test() {
  const promise = Promis.resolve(123)
  console.log(await promise)
}
test()

//test이름의 비동기 함수를 만들어서 변수 promise만들고
//Promise라는 데이터 적고 resolve라는 메소드 실행 