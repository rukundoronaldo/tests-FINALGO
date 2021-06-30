import Classes from "./css/LeftProto.module.css"

function LeftProto(props)
{
    const title = props.title;
    if (title === "true") {
        return (
            <div className={Classes.middle} style={{marginTop:props.marginTop}}>
                <h2 style={{fontSize:props.fontSize}}>{props.titleText}</h2>
            </div>
        )
    } else return (
        <div className={Classes.middle}>
            <h5>{props.titleText}</h5>
            <p>{props.paragrapheText}</p>
            <button className={Classes.button}>{props.btnText}</button>

        </div>
    )
}

export default LeftProto;