"use client"

import { useEffect, useMemo, useState } from "react";
import styles from "./MobileList.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    title: string,
    image: string,
    pinkImage?: string,
    href: string,
    active:boolean
}

const MobileList = (props: Props) => {
    const color =  '#5E4BE2'

    return (
        <Link className={styles.navigation} href={props.href}>
            <img src={ props.active ? props.pinkImage : props.image} className={styles.neutral} />
            <span style={{ color: props.active ? color : '' }} className={styles.color}>
                {props.title}
            </span>
        </Link>
    )
}

export default MobileList







