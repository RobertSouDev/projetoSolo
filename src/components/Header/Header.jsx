import logo from "../../assets/logo.png"
import './Header.css'
import Button from "../Button/Button"

function Header(){
    return(
        <>

        <div className="Divheader">
            <div >
                <div className="div1">
                    <img src={logo} alt="" /> 
                </div>
               
            </div>
            <div >
            </div>
            <div>
                <input type="text" name="seila" id="" className="input"  placeholder="Pesquisar produtor..."/>
            </div>
            <div>
                <a href="/">Cadastra-se</a>
            </div>
            <div>
                <Button/>
            </div>

        </div>
        
        </>
    )
}

export default Header