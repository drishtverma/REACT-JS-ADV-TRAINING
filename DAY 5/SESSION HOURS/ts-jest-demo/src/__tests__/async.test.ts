function getArrayAsync(callback){ 
    setTimeout(()=>callback([1,2,3,4,5]),2000,callback);
    }
    
    test('test async', done => {
        function runtest(data){
            // const data = getArrayAsync();
            expect(data).toContain(3);
            console.log(data);
            done();
    
        }
        getArrayAsync(runtest);
    });
    
    
    //NOW let's see promisified async code
    function getArrayAsyncUsingPromise(){ 
        return new Promise((resolve,reject)=>{
    
            setTimeout(()=>resolve([1,2,3,4,5]),2000);
        });
        }
    
    //If your code uses promises, 
    //there is a more straightforward way to handle asynchronous tests. 
    //Return a promise from your test, and Jest will wait for that promise to resolve. 
    //If the promise is rejected, the test will automatically fail. 
    
    test('async using promise',()=>{
        return getArrayAsyncUsingPromise().then((data)=>{
            console.log(data);
            expect(data).toContain(3);
        })
    });
    
    /**
     * Be sure to return the promise - if you omit this return statement, 
     * your test will complete before the promise returned from getArrayAsyncUsingPromise resolves and then() has a chance to execute the callback.
     * If you expect a promise to be rejected, use the .catch method. 
     * Make sure to add expect.assertions to verify that a certain number of assertions are called.
     * Otherwise, a fulfilled promise would not fail the test.
     */
    
    
     /**
      * You can also use the .resolves or .rejects matcher in your expect statement,
      *  and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.
      */
    
      //The same example above using .resolves matcher
      //NOTE it is RESOLVES and not RESOLVE
      test('async using promise using resolves matcher',()=>{
        return expect(getArrayAsyncUsingPromise()).resolves.toContain(3);
        });
    
    
    
    /**
     * Alternatively you can also use the async/await syntax.
     * in case of async/await you don't have to return the promise 
     */
    
    test('async using promise using async/await',async ()=>{
        const data =  await getArrayAsyncUsingPromise();
         expect(data).toContain(3);
        });
    
    // async and await can be combined with .resolves matcher
    
    test('async using promise using async/await with .resolves matcher', async () => {
        await expect(getArrayAsyncUsingPromise()).resolves.toContain(3);
      });
    