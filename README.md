# loop-performance-test-nodejs
Performance test with 4000000 data token object

here are test result

Node version : v12.16.1
```
1. for of => 7167.170ms

2. for in => 12807.938ms

3. .forEach => 6931.724ms

4. .map => 6346.986ms

5. for (with idx was declare outside loop function) => 6918.971ms

```
