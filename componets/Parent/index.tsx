import React from 'react';
import ParentSibling from '../ParentSibling';



interface Props {
  [key: string]: any,
  data: string,
  isActive: boolean,
  element: { id: string, age: number},
  action: () => void,
  callback: <T>(data: {[key: string]: any}) => T;

}



const Parent = ():JSX.Element => {
  console.log("i'm Parent");
  
  const fn = (): void => {console.log("")};

  return <div>
  i'm Parent


  </div>


}

export default Parent;