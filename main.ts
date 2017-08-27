import {Observable} from 'rxjs';

let circle = document.getElementById("circle");

let source = Observable.fromEvent(document, 'mousemove')
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .filter(value => value.x < 700)
    .delay(300);

function onNext(value){
    circle.style.left = value.x;
    circle.style.top = value.y;
}

source.subscribe(
    onNext,
    e => console.log(`Error: ${e}`),
    () => console.log('completed')
);
