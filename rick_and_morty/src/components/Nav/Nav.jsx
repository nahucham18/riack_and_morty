import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"


const  Nav = ({onSearch, random}) =>{
    return (
        <nav className ={style.container}> 
            <SearchBar 
                onSearch={onSearch} random={random}
            />
        </nav>
    )
}

export default Nav