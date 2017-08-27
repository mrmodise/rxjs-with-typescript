import {Subject} from 'rxjs/';
import {Observable} from 'rxjs/Observable';

let source = Observable.from([1,2,3]);
let subject = new Subject();
let multicasted = source.multicast(subject);


multicasted.subscribe({
    next: (v) => console.log(`observerA ${v}`)
});

multicasted.subscribe({
    next: (v) => console.log(`observerB ${v}`)
});


multicasted.connect();