"use client"

import { ReactNode } from "react"
import { RecoilRoot } from "recoil"

interface Props {
    children:ReactNode
}

export const RecoilWrapper = (props:Props) => {
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}

export default RecoilWrapper