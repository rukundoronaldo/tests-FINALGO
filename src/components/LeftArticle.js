import Classes from './css/LeftArticle.module.css'
import LeftProto from './LeftProto'

function Left()
{
    return (
        <div className={Classes.aside}>
            <div>
                <LeftProto 
                title="true"
                titleText="Lorem ipsum dolor sit amet?"
                marginTop="50px"
                fontSize="30px"
                />

                <LeftProto 
                title="false"
                titleText="Lorem ipsum"
                paragrapheText="orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio nisl, aliquam eu elementum efficitur, vehicula quis justo. Vivamus accumsan nunc non urna pharetra, ac tincidunt tellus porta. Phasellus eu tortor a risus interdum tempus quis sit amet elit. Nullam vel rutrum erat. Vivamus accumsan"
                marginTop="50px"
                fontSize="30px"
                btnText="Lorem"
                />
            </div>
        </div>
    )
}

export default Left;