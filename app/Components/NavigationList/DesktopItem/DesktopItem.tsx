import { useState } from "react";
import styles from "./DesktopItem.module.scss"
import NavList from "../NavList/NavList";
import {  usePathname } from "next/navigation";



const DesktopItem = () => {
    const data = [
        {title:"Home" ,href:"/", image:"/Image/Home.svg", key : '/' } ,
        {title:"Artist" ,href:"artist", image:"/Image/Artist.svg" , key :'/artist'},
        {title:"Playlist" , href:"playlist", image:"/Image/Albums.svg" , key : '/playlist'},
        {title:"Albums", href:"album", image:"/Image/Playlist.svg" , key : '/album'}   
    ]


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const pathname = usePathname()
    
    return (
        <div className={styles.mainNavigation}>
            <div className={styles.lineContainer}>
                <div className={styles.line} onClick={toggleMenu}>
                    <img src="/Image/Line.svg" alt="Menu" />
                </div>
            </div>
            <nav className={`${styles.navigationContainer}  ${isOpen ? styles.open : ''}`}>
                <div className={styles.navigation}>
                    <div className={styles.navigationLine}>
                        <img onClick={toggleMenu} src="/Image/Line.svg" alt="Menu" />
                    </div>
                    {data.map(item => (
                        <NavList image={item.image} title={item.title} href={item.href} active = {item.key === pathname} />
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default DesktopItem