
/*Start-Code During Interview-Nicolas*/

//  let i = '';

//  const numbers = (n) =>{

//      for(i=1; i<= n; i++){
//          if (i%2) {
//              console.log( i, 'fizz');
//          } else if(i%3){
//             console.log(i, 'buzz');
//          }else if(i%2 && i%3){
//              console.log('fizz buzz');
//          }
//      }

//  };

//  numbers(10);

/*End-Code During Interview-Nicolas*/

// Fixed Code //

let i = '';

const numbers = (n) =>{

    for(i=1; i<= n; i++){
        if (i%2==0 && i%3==0) {
            console.log( i,'fizz buzz');
        } else if(i%3==0){
            console.log(i, 'buzz');
        }else if(i%2==0){
            console.log(i,'fizz');
        } else if (!i%2==0 && !i%3==0 ){
            console.log(i);
        }
    }

};

numbers(10);