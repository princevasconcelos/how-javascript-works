const MyPromise = require("./promise");

describe("Promises", () => {
  it("Initializes with value undefined, pending state and empty promises list", () => {
    const executor = () => {};
    const promise = new MyPromise(executor);

    expect(promise.value).toBe(undefined);
    expect(promise.state).toBe("pending");
    expect(promise.promiseFulfillReactions).toStrictEqual([]);
    expect(promise.promiseRejectReactions).toStrictEqual([]);
  });

  describe("when fulfilled", () => {
    it("Then should be called", done => {
      return new MyPromise(resolve => {
        resolve({
          data: "faker"
        });
      }).then(response => {
        expect(response.data).toBe("faker");
        done();
      });
    });

    it("Should resolve only when async code had run", done => {
      return new MyPromise(resolve => {
        setTimeout(() => {
          resolve({
            data: "faker"
          });
        }, 10);
      }).then(response => {
        expect(response.data).toBe("faker");
        done();
      });
    });

    it("Can chain many .then", done => {
      const promise = new MyPromise(resolve => {
        setTimeout(() => {
          resolve({
            data: "faker"
          });
        }, 10);
      });

      promise.then(response => {
        expect(response.data).toBe("faker");
      });

      promise.then(response => {
        expect(response.data).toBe("faker");
        done();
      });
    });

    it("Should handle promises that return new promises", done => {
      const readFromFileSystemPromise = new Promise(resolve =>
        setTimeout(() => {
          resolve({
            file: "image.jpg"
          });
        }, 10)
      );

      return new MyPromise(resolve => {
        setTimeout(() => {
          resolve({
            data: "need to read files from fs"
          });
        }, 10);
      })
        .then(response => {
          expect(response.data).toBe("need to read files from fs");
          return readFromFileSystemPromise;
        })
        .then(response => {
          expect(response.file).toBe("image.jpg");
          done();
        });
    });
    describe("when onRejected", () => {
      it("Catch should be called", done => {
        const message = "Promise has been rejected";

        return new MyPromise((resolve, reject) => {
          setTimeout(() => {
            reject({
              message
            });
          }, 10);
        }).catch(err => {
          expect(err.message).toBe(message);
          done();
        });
      });

      it("Can chain .then after a .catch", done => {
        const message = "Promise has been rejected";

        return new MyPromise((resolve, reject) => {
          setTimeout(() => {
            reject({
              message
            });
          }, 10);
        })
          .catch(err => {
            expect(err.message).toBe(message);
            return { data: "some new data" };
          })
          .then(response => {
            expect(response.data).toBe("some new data");
            done();
          });
      });

      it("Should handle Errors on .catch", done => {
        const message = "Promise has been rejected";

        return new MyPromise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error(message));
          }, 10);
        })
          .catch(err => {
            expect(err.message).toBe(message);
            throw new Error("A new error happen");
          })
          .catch(newError => {
            expect(newError.message).toBe("A new error happen");
            done();
          });
      });
    });
  });
});
