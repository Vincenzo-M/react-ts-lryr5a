import React from 'react';


interface Props {
  [key: string]: any,
  data: string,
  isActive: boolean,
  element: { id: string, age: number},
  action: () => void,
  callback: <T>(data: {[key: string]: any}) => T

}


const Child = (props: Props): JSX.Element => {

  const [childClick, setChildClick] = useState <string>('');
  console.log("I'm child", childClick);

  const fn = (): void =>{
    setChildClick('string da click');
    props.action('action da click')
  }

  return (
    <div onClick={fn}>
    I'm child. Click me! n:{childClick}
    </div>
  )
}


export default Child;