import Classes from './css/BigDiv.module.css'

function BigDiv(props)
{
    return (
        <div className={Classes.page}>
            {props.children}
        </div>
    )
}

export default BigDiv;