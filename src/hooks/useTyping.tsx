import { useState } from "react"

type Props = {
    text:string;
    typeSpeed?:number;

}

const useTyping = (props: Props) => {
    const {text,typeSpeed=200}=props
    const [textTyping, setTextTyping] = useState('')

    




}

export default useTyping
