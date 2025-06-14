import styled from './Header.module.css'
import myImage1 from "../img/image1.png"
import myImage2 from "../img/image2.png"
import myImage3 from "../img/image3.png"
import { useDispatch, useSelector } from 'react-redux'

const defaulState = {
    cash: 100500,
  }

export const reducerLogo = (state = defaulState, action) => {
  switch(action.type) {
    
    case "PLUS_BALANCE":
      return {...state, cash: state.cash + action.payload}
    case "MINUS_BALANCE":
      return {...state, cash: state.cash - action.payload}
    default: 
      return state
  }
}

export function Logo() {
    const plusCash = () => {
    dispatch({type: "PLUS_BALANCE", payload: 1000})
  }

  const minusCash = () => {
    dispatch({type: "MINUS_BALANCE", payload: 1000})
  }

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash)

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
        {cash}
      </div>
      <div> 
        <div className={styled.plusBalance}>
          <button onClick={() => plusCash()}> 
            +
          </button>
        </div>
        <div className={styled.plusBalance}> 
          <button onClick={() => minusCash()}> 
            -
          </button>
        </div> 
    </div>
    </div>
  )
}
