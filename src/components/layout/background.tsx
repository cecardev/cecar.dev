import React, { ReactElement } from 'react'

type Props = { children: ReactElement[]|ReactElement }

const Background = (props: Props) => {
    return (
        <>
            {props.children}
        </>
    )
}

export default Background
