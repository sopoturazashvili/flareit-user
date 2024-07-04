import LogOut from "../../LogOut/LogOut"
import styles from "./MobileItem.module.scss"
import MobileList from "./MobileList/MobileList"
import { usePathname } from "next/navigation"

const MobileItem = () => {
    const dataItem = [
        { image: "/Image/Home.svg", title: "Home", pinkImage: "/Image/pinkHome.svg", href: "/" ,key:"/"},
        { image: '/Image/search.svg', title: "Search", pinkImage: "/Image/pinkSearch.svg", href: "search" ,key:"/search"},
        { image: "/Image/Library.svg", title: "Library", pinkImage: "/Image/pinkLibrary.svg", href: "library" ,key:"/library"},
    ]

    const pathname = usePathname()
    return (
        <div className={styles.mobileContainer}>
            <div className={styles.navigationContainer}>
                {dataItem.map((item) => (
                    <MobileList title={item.title} image={item.image} pinkImage={item.pinkImage} href={item.href} active={item.key === pathname} />
                ))}
                <LogOut src={""} width={24} height={24} title={"Profile"} />
            </div>
        </div>
    )
}

export default MobileItem