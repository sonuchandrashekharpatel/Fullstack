import { IoPersonSharp } from "react-icons/io5"
import classNames from "classnames"
export default function Avatar({src, alt, children, ...rest}) {
    
    const color = ["navy", "pink", "red", "blue", "green"]
    const randomBackground = color[Math.floor(Math.random() * color.length)]

    const allClass = classNames("avatar", children && "avatar-letters", !children && !src && "avatar-icon", !src && randomBackground)

    function renderAvatar() {
        if(src) {
            return <img src={src} alt={alt}></img>
        } else if (children) {
            return children
        } else {
            return <IoPersonSharp />
        }
    }

    return (
        <div className = {allClass}>
            {renderAvatar()}        
        </div>
    )
}