let x =navigator.mediaDevices.getUserMedia({video: true,audio: true});

console.log("Line 3 => ", x );
x.then((value)  {   
     console.log(value);
});