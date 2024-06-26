import { useState } from "react"
import styles from "./LikeButton.module.scss"

type Props = {
    isLiked: boolean
}


export const LikeButton = (props:Props) => {
    const [like,setLike] = useState(props.isLiked)


  const LikeFunc = () => {
    setLike(!like)
  }
    return (
        <div onClick={LikeFunc}>
            {like ? <img src={"Image/LikeButton.svg"} /> : <img src={"/image/WhithoutLike.svg"} />}
        </div>
    )
}