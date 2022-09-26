// 비동기가 무엇인가?
// 비동기는 '동시에 돌아간다' 개념이 아니다
// 비동기는 동시보다는 '순서'의 문제이다.
// 비동기는 코드 순서와 실제 실행순서가 다르다.(비동기 코드도 정해진 순서는 다를 있다. 보이는 것과 다를 뿐)
// 한 번 비동기는 영원한 비동기
// 비동기를 동기로 바꿀 수 없다!!! 노력을 하지마!!


//매크로
setImmediate(()=> {
    console.log('a');
},0);

setTimeout(()=> {
    console.log('b');
},1000);

setTimeout(()=> {
    console.log('c');
},2000);

//마이크로 -> 우선순위 높다!
Promise.resolve().then(() => {
    console.log('p');
})

// 동시에 뭔가 이루어지는것은 Background(BG)를 한번 거친다
// promise, process.nextTick -> micro, 나머지는 매크로
// micro task queue가 꽉 차있으면 영원히 macro task는 실행이 안된다.