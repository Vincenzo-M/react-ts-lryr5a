import React from 'react';
import Child from '../Child';



interface Props {
  [key: string]: any,
  data: string,
  isActive: boolean,
  element: { id: string, age: number},
  action: () => void,
  callback: <T>(data: {[key: string]: any}) => T;

}


let c = 0;
const Parent = ():JSX.Element => { 

  const [counter, setCounter] = useState < null | number>(0);

    setCounter (counter+1);
    console.log("I'm parent counter", counter);
  

    const handlerC = ():void => {
    c = c+1;
  
    console.log("I'm parent c", c);
  }


  

  console.log("i'm Parent");
  
  const fn = (text:string): void => {console.log("gsgdsg")};

  return {
    <>

       <div onClick={handlerC}>
       i'm Parent e child C 
       </div>
       
    <>

  }


}

export default Parent;