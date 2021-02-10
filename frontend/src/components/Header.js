import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider'
const Header = () => {
  const [{ basket }, dispatch] = useStateValue()
  console.log({ basket })
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt=''
        ></img>
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput'></input>
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='headerOptionLineOne'>Hello please</span>
            <span className='headerOptionLineTwo'>Sign In</span>
          </div>
        </Link>
      </div>

      <div className='header__nav'>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='headerOptionLineOne'>Returns</span>
            <span className='headerOptionLineTwo'> & Orders</span>
          </div>
        </Link>
      </div>

      <div className='header__nav'>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='headerOptionLineOne'>Your</span>
            <span className='headerOptionLineTwo'>Prime</span>
          </div>
        </Link>
      </div>

      <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='headerOptionLineTwo header__basketCount'>
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Header
