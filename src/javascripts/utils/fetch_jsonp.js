const default_options = {
  timeout: 5000,
  callback: "callabck",
  callbackFunction: "callbackFunction"
};

function generateCallbackFunctionName(callbackFunctionName=default_options.callbackFunction){
  return `${callbackFunctionName}_${Date.now()}_${(Math.random()+'').slice(2, 8)}`;
}

function removeScript(scriptId){
  let script = document.getElementById(scriptId);
  let head = document.getElementsByTagName("head")[0];
  if(script&&head){
    head.removeChild(script);
  }
}

function removeCallbackFunction(callbackFunctionName){
  if(window[callbackFunctionName]){
    try{
      delete wwindow[callbackFunctionName];
    }catch(e){
      window[callbackFunctionName] = undefined;
    }
  }
}

function clearTimer(timer){
  if(!timer){
    return;
  }
  clearTimeout(timer);
}

function fetchJsonp(url, options=default_options){
  let timer;
  return new Promise(function(resolve, reject){
    let callbackFunctionName = generateCallbackFunctionName(options.callbackFunction),
      _url = `${url}&${options.callback}=${callbackFunctionName}`,
      scriptId = `${url}_${callbackFunctionName}`,
      script=document.createElement("script"),
      head=document.getElementsByTagName("head")[0];
      
      script.setAttribute('id',scriptId);
      script.setAttribute('src', _url);
      head.appendChild(script);
      
      window[callbackFunctionName] = function(response){
        resolve({
          status: "success",
          json: ()=>Promise.resolve(response)
        });
        removeScript(scriptId);
        removeCallbackFunction(callbackFunctionName);
        timer = clearTimer(timer);
      }
      
      timer = setTimeout(function(){
        reject({
          status: "error",
          message: "timeout"
        });
        removeScript(scriptId);
        removeCallbackFunction(callbackFunctionName);
        timer = null;
      }, options.timeout||default_options.timeout);
      
      script.onerror = function(message){
        reject({
          status: "success",
          message: message
        });
        removeScript(scriptId);
        removeCallbackFunction(callbackFunctionName);
        timer = clearTimer(timer);
      }
  });
}

export default fetchJsonp;