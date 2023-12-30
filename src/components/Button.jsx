const Button = ({ style, text, type=undefined }) => (
    <button className={style} type={type ? type : "button"}>{text}</button>
)

export default Button