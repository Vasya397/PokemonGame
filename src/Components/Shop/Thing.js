import styled from "./Thing.module.css"

export function Thing(props) {
  return (
    <div>
      <div className={styled.container}>
          <img src={props.img} className={styled.img}></img>
            <div className={styled.text}>
                <div className={styled.h2}> 
                    {props.header}
                </div>
                <div> 
                    {props.text}
                </div>
            </div>
      </div>
      <div className={styled.buttonShop}> 
          <button name="button" className={styled.buttonShop}> 
            Купить за {props.price}
          </button>
      </div>
    </div>
  )
}



