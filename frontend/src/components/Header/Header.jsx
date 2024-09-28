
import './Header.css';
function Header() {


  return (
    <>
   
   <header>
        <nav>
            <div className="logo">
               
            </div>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="burger-menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </label>
            <ul>
                <li><a href="#">Начало</a></li>
                <li><a href="#">Запази парти</a></li>
                <li><a href="#">Пакети</a></li>
                <li><a href="#">Условия</a></li>
                <li><a href="#">Контакти
                    </a></li>
            </ul>
            <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    </header>
      
    </>
  )
}

export default Header
