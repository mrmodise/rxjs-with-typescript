import {Observable} from 'rxjs';
import {Observer} from 'rxjs/Observer';

let numbers = [1,5,10];

// create observable from the array of numbers
let source = Observable.from(numbers);

// an easier implementation
source.subscribe(
    value => console.log(`Value ${value}: easier implementation`),
    error => console.log(`On error ${error}: easier implementation`),
    () => console.log('Completed: easier implementation')
);

// formal implementation
class MyObserver implements Observer<number>{

    next(value){
        console.log(`Value ${value}`);
    }

    error(e){
        console.log(`On error ${e}`);
    }

    complete(){
        console.log('Completed')
    }
}

// subscript to the observable
source.subscribe(new MyObserver());
