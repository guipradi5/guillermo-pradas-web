import React from 'react';
import { useRouter } from 'next/navigation'
import './SystemButton.css'

const SystemButton = ({buttonImage = '', buttonText = '', modifiers = '', href = '', onTrigger = () => {}}) => {

  const router = useRouter()

  const systemButtonClassName = "systemButton"
  let classModifiers = ''
  if(modifiers) {
    modifiers.split(" ").forEach((mod:string) => {classModifiers += `${systemButtonClassName}--${mod} `})
  }
  const buttonClasses = `${systemButtonClassName} ${classModifiers}`

  function goToPage(){
    if(href){
      router.push(href)
    } else {
      onTrigger()
    }
  }

  return (
    <button className={buttonClasses} onClick={goToPage}>
      {buttonImage ? (
        <img src={buttonImage} title={buttonText} />
      ) : (
        <span>{buttonText}</span>
      )}
      </button>
  );
};

export default SystemButton;