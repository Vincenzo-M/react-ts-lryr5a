import React from 'react';


interface Props {
  [key: string]: any,
  data: string,
  isActive: boolean,
  element: { id: string, age: number},
  action: () => void,
  callback: <T>(data: {[key: string]: any}) => T

}


const ParentSibling = (props: Props): JSX.Element => {
  console.log("I'm ParentSibling")

  return <>
  i'm ParentSibling
  </>;
}


export default ParentSibling;