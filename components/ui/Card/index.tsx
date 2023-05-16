import { FC } from "react"
import { ICard } from "./Card.inteface"


const Card: FC<ICard> = ({children, onClick}) => {
    return (
        <div className='flex flex-col justify-start w-full rounded-md border p-4' onClick={onClick}>
            {children}
        </div>
    )
}

export default Card