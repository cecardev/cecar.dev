import { useEffect, useState } from "react"

type Props = {
    text: string;
    typeSpeed?: number;

}

const useTyping = (props: Props) => {
    const { text, typeSpeed = 200 } = props
    const [textTyping, setTextTyping] = useState('')

    useEffect(() => {
        let interval = setInterval(() => {
            setTextTyping((prev: string) => {
                if (prev === text) {
                    clearInterval(interval)
                    return prev
                }
                else {
                    return prev + text[prev.length]
                }

            })
        }, typeSpeed)



        return () => {
        }
    }, [])

    return { textTyping }


}

export default useTyping
