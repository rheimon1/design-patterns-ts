/**
 * The Observer pattern is used to maintain a list of dependents that need to be notified when a change
 * happens to the object being observed. In Node.js, this pattern is used to manage events and callbacks.
 */

class EventObserver {
  private observers: any[];

  constructor() {
    this.observers = [];
  }

  subscribe(fn: Function) {
    this.observers.push(fn);
  }

  unsubscribe(fn: Function) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  notify(data: any) {
    this.observers.forEach(observer => observer(data));
  }
}

const eventObserver = new EventObserver();

eventObserver.subscribe((data: any) => console.log(`Subscribed to ${data}`));
eventObserver.subscribe((data: any) => console.log(`Listening to ${data}`));
eventObserver.notify("some data");
eventObserver.notify("another data");