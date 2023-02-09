import Background from '@/components/layout/background'
import React, { useEffect, useState } from 'react'

type Props = {}

const index = (props: Props) => {
    var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt']

    const [animatedText, setAnimatedText] = useState('')

    useEffect(() => {
        let interval = setInterval(() => {
            setAnimatedText((prev:string) => {
                if (prev === words[0]){
                    clearInterval(interval)
                    return prev
                }
                else {

                    console.log(words[0][prev.length])
                    return prev + words[0][prev.length]
                }

            })
        }, 200)

        return () => {
        }
    }, [])


    return (
        <Background>
            <div>{animatedText}</div>
        </Background>
    )
}

export default index
