### The architecture:

<img src="https://devtks.github.io/img/express-js-and-mongodb/flow.PNG">

- `Router`: route the request to corresponding function the controller
- `Controller`: responsible for processing request and responsible
- `Service`: handle the business logic

### Some gotchas while writing express app with OOP

- In a class method,

  ```
  getTweets = (req, res) => {
    console.log(this);
  };
  ```

  The `this` here is pointing to the instance of the class.
  However, a small change here:

  ```
  getTweets(req, res){
    console.log(this);
  };

  OR

  getTweets = function(req, res){
    console.log(this);
  };
  ```

  This won't work as expected, because the `this` keyword is not pointing to the instance, instead it points to `undefined` somehow.
  Hence to avoid this, rule of thumb is always use the method above to declare class method!
