import style from './Message.module.css'

export const Message = (props) => {
  return <>
    <h1 className={style.message}>{props.text}</h1>
  </>
}