import logA from "./modules/test"
import logB from "./modules/test2"

class test{

  constructor(url){
    this.ts = Date.now()
    this.url = url
  }
  
  fun1(){
    return logA()
  }

}

export default test