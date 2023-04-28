import React from 'react'
import './style.scss'
import photo from '../../assets/img/Apple.gif'

const Nav = () => {
  return (
    <nav>
      <div className="white">
        <div className="main">
          <img src={photo} alt="" />
          <p className="price"></p>
        </div>
        <div className="navbar">
          <ul>
            <li>Haqqımızda</li>
            <li>Ödəniş və çatdırılma</li>
            <li>Mağazalarımız</li>
            <li>Biznes üçün</li>
            <li>Tax Free</li>
            <div className="lineV"></div>
            <li>
              <i class="fa-regular fa-clock"></i>09:00 - 22:00 (Be―B)
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>+994 51 400-00-32
            </li>
          </ul>
          <div className="second">
            <span>AZ</span>
            <div className="lineV"></div>
            <span>EN</span>
            <div className="lineV"></div>
            <span>RU</span>
          </div>
          <div className="third">
            <i class="fa-solid fa-user"></i>
            <span>Şəxsi kabinet</span>
          </div>
        </div>
      </div>
      <div className="black">
        <ul>
          <h1>iSpace</h1>
          <div className="lineWhite"></div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <li>Mac</li>
          <li>Ipad</li>
          <li>Iphone</li>
          <li>Watch</li>
          <li>TV</li>
          <li>Airpods</li>
          <li>Audio</li>
          <li>Aksesuarlar</li>
          <li>Brendler</li>
          <div className="lineW"></div>
          <li>Xidmetler</li>
          <li>Servis</li>
          <li>Bloqlar</li>
        </ul>
        <div className="icons">
          <i class="fa-solid fa-scale-unbalanced-flip"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </nav>
  );
}

export default Nav