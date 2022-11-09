import style from './Message.module.css'

export const Message = ({text}) => {
  return <>
    <h1 className={style.message}>{text}</h1>
  </>
}