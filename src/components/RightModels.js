
import Classes from "./css/RightArticle.module.css"

function RightModels(props)
{
    return (
        <div className={Classes.RightModelsDiv} style={{
            borderBottom : props.border,
            padding: props.padding,
            marginTop: props.marginTop
        }}>
            <div className={Classes.RightModels} style={{
                backgroundColor : props.color,
                width:props.width,
                height:props.height
                }}></div>
            <h5 style={{fontSize:props.textSize}}>{props.text}</h5>
        </div>
    )
}

export default RightModels