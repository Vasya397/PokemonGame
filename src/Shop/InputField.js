import styled from "./Shop.module.css"

export function InputField() {
  return (
    <div>
      <form> 
        <input type="search" name="text" class="search" className={styled.inputField} placeholder="Что вы хотите найти?"></input>
      </form>
    </div>
  )
}
