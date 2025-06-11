import styled from './Header.module.css'
import myImage1 from "../img/image1.png"
import myImage2 from "../img/image2.png"
import myImage3 from "../img/image3.png"

export function Logo() {
  return ( 
    <div className={styled.container}> 
      <div> 
      <img src={myImage1} alt='1' />
      </div> 
      <div> 
      <img src={myImage2} alt='2' />
      </div>
      <div className={styled.logoMoney}> 
      <img src={myImage3} alt='3' />
      </div>
      <div className={styled.money}> 
        100500
      </div>
      <div className={styled.plusMinus}> 
        <div className={styled.plusBalance}> 
          +
        </div>
        <div className={styled.plusBalance}> 
          -
        </div> 
    </div>
    </div>
  )
}
