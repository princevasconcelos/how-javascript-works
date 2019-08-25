const STATE = {
  PENDING: "pending",
  FULFILED: "fulfiled",
  REJECTED: "rejected"
};

/**
 * Promises are objects that will be delivered sometime in the future.
 * It was created to solve a problem named callback hell.
 *
 * 1) Promises are Eager Loading. They are executed when created.
 *
 * 2) Promises changes its state just once. If its not pending, its completed.
 *
 * 3) .then return a new promise
 *
 * 4) .catch can be chained with .then or .catch
 */

class MyPromise {
  constructor(executor) {
    if (typeof executor !== "function") {
      return new TypeError("Executor must be a function");
    }

    this.state = STATE.PENDING;
    this.value = undefined;

    this.promiseFulfillReactions = [];
    this.promiseRejectReactions = [];
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(data) {
    if (this.state !== STATE.PENDING) {
      return;
    }

    if (data != null && typeof data.then === "function") {
      return data.then(this.resolve.bind(this));
    }

    this.value = data;
    this.state = STATE.FULFILED;
    this.promiseFulfillReactions.forEach(onFulfilled => onFulfilled(data));
  }

  reject(error) {
    if (!this.state === STATE.PENDING) {
      return;
    }

    this.value = error;
    this.state = STATE.REJECTED;
    this.promiseRejectReactions.forEach(onRejected => onRejected(error));
  }

  then(onFulfill, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = res => resolve(onFulfill(res));

      if (this.state === STATE.PENDING) {
        return this.promiseFulfillReactions.push(handleFulfilled);
      }

      handleFulfilled(this.value);
    });
  }

  catch(onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleRejected = data => {
        try {
          /**
           * Catch uses a resolve instead of reject to chain
           * the next .then if exists
           */
          resolve(onRejected(data));
        } catch (e) {
          reject(e);
        }
      };

      if (this.state === STATE.PENDING) {
        return this.promiseRejectReactions.push(handleRejected);
      }

      handleRejected(this.value);
    });
  }
}

module.exports = MyPromise;
