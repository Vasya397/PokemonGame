import styled from "./Inventory.module.css"

const nums = [1, 2, 3 , 4, 5];

export function Slots() {
    return(
        <div className={styled.container}> {nums.map(num => <div className={styled.slot}> </div>)} </div>
    );
}
