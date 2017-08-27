#### RxJS w/ TypeScript
RxJS (Reactive Programming in JavaScript) is a library for composing asynchronous and event-based programs by using ```observable sequences```. It provides one core type, the ```Observable```, satellite types (```Observer```, ```Schedulers```, ```Subjects```) and operators inspired by ``Array#extras`` (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

#### Observables
Observables are created using ``Observable.create`` or a creation operator, are subscribed to with an Observer, execute to deliver ``next / error / complete`` notifications to the Observer, and their execution may be disposed. These four aspects are all encoded in an Observable instance, but some of these aspects are related to other types, like Observer and Subscription.

Core Observable concerns:

 - `Creating` Observables
 - `Subscribing` to Observables
 - `Executing` the Observable
 - `Disposing` Observables

#### Creating
`Observable.create` is an alias for the Observable constructor, and it takes one argument: the subscribe function.

NB: Observables can be created with create, but usually we use the so-called creation operators, like of, from, interval, etc.

#### Subscribing
Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.

When calling ``observable.subscribe`` with an Observer, the function subscribe in Observable.create(observer => {...}) is run for that given Observer. Each call to observable.subscribe triggers its own independent setup for that given Observer.

#### Executing
The code inside Observable.create(``observer => {...}``) represents an "Observable execution", a lazy computation that only happens for each Observer that subscribes. The execution produces multiple values over time, either synchronously or asynchronously.

There are three types of values an Observable Execution can deliver:

 - "Next" notification: sends a value such as a Number, a String, an Object, etc.
 - "Error" notification: sends a JavaScript Error or exception.
 - "Complete" notification: does not send a value.

Next notifications are the most important and most common type: they represent actual data being delivered to an Observer. Error and Complete notifications may happen only once during the Observable Execution, and there can only be either one of them.

#### Disposing
When you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.

#### Observer
An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: ``next``, ``error``, and ``complete``. To use the Observer, provide it to the subscribe of an Observable:

```
source.subscribe(new MyObserver());
```

Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.

#### Additional Reading
The documentation in this page is retrieved from ReactiveX, and has been modified to explain some concepts from this code-base. Further reading can be done at: 
http://reactivex.io/rxjs/manual/overview.html

#### Subscription
A Subscription is an object that represents a disposable resource, usually the execution of an Observable. A Subscription has one important method, ``unsubscribe``, that takes no argument and just disposes the resource held by the subscription. In previous versions of RxJS, Subscription was called "Disposable".
 
A Subscription essentially just has an unsubscribe() function to release resources or cancel Observable executions.

#### Subject
A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

- Every Subject is an Observable    
- Every Subject is an Observer

#### License
```
MIT License

Copyright (c) 2017 Mr Modise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```