import styled from './Header.module.css'

export function Logo() {
  return ( 
    <div className={styled.container}> 
      <div> 
      <img src="./image1.png" alt='1' />
      </div> 
      <div> 
      <img src="./image2.png" alt='2' />
      </div>
      <div className={styled.logoMoney}> 
      <img src="./image3.png" alt='3' />
      </div>
      <div className={styled.money}> 
        100500
      </div>
    </div>
  )
}
