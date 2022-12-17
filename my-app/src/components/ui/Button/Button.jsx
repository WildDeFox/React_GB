export default function Button(props) {
  return (
    <button {...props} style={{color: 'green'}} onClick={props.click}>
      {props.children}
    </button>
  )
}