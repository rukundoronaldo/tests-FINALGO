import Classes from './css/RightArticle.module.css'
import RightModels from './RightModels';

function Rigth(props)
{
    return (
        <div className={Classes.aside}>
            <div>
                    {props.children}
                    <RightModels text="lorem ipusum" color="#472759"
                    border="1px solid black" padding="10px"
                    marginTop="50px" width="70px" height="70px" textSize="20px"
                    />

                    <RightModels text="lorem ipusum" color="black" width="50px" height="50px" marginTop="20px"/>

                    <RightModels text="lorem ipusum" color="#472759" width="50px" height="50px" marginTop="20px"/>

                    <RightModels text="lorem ipusum" color="#472759" width="50px" height="50px" marginTop="20px"/>
            </div>
            
        </div>
    )
}

export default Rigth;