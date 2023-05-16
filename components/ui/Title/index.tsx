import { FC } from "react"
import { ITitle } from "./Title.interface"


const Title: FC<ITitle> = ({text}) => {
    return (
        <h1 className='text-2xl text-center'>{text}</h1>
    )
}

export default Title