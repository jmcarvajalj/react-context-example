import { useContext } from "react"
import { ThemeContext } from "./themeContext.jsx"

export default function Body() {

    const { color } = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`}>
            <h2>Lorem Ipsum</h2>
            
            <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget molestie sapien. Sed rutrum nisl vel massa aliquam, nec finibus mauris tempor. Suspendisse nec interdum velit, non suscipit odio. Nunc eget ullamcorper eros. Nulla tellus massa, fringilla vitae vestibulum vel, fringilla aliquam felis. Suspendisse potenti. Ut sed ante tristique nisl fermentum commodo. Sed ullamcorper sapien quam, id condimentum enim sodales in. Integer sed ipsum eget lorem interdum eleifend vitae vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sagittis tincidunt nibh, quis molestie lorem pretium nec. Donec ultricies dapibus elementum. In et elit laoreet, vehicula dolor a, ultrices mi.
            </p>
            <p className="paragraph">
                Nullam ut gravida justo, vel posuere tortor. Vestibulum ac ligula eget elit mollis scelerisque. Nulla tempus fringilla nibh ut porttitor. Nulla a tempus eros. Curabitur sagittis augue augue, nec pharetra quam accumsan ac. Pellentesque in tortor sed nulla fringilla posuere nec eget lorem. Vivamus tristique metus ac placerat tempus. Quisque vulputate auctor urna. Morbi ut eros nibh. Nunc cursus posuere erat, non lobortis sem sodales eu. Donec viverra feugiat volutpat. Pellentesque suscipit enim vel nisl suscipit, sit amet euismod tortor pretium. Mauris iaculis ligula eget tortor tempus lobortis. Vivamus nisi orci, vestibulum sed gravida non, blandit eu leo.
            </p>
            <p className="paragraph">
                Suspendisse vitae fringilla sapien, ut ultrices sapien. Quisque sit amet tristique ante, nec condimentum augue. Donec venenatis justo in dolor vehicula, ac mattis diam accumsan. Phasellus tincidunt libero sit amet vestibulum cursus. Vivamus ut arcu erat. Mauris justo odio, tempor sit amet bibendum nec, bibendum id lorem. Donec dignissim justo urna, in semper magna tempus sit amet.
            </p>
            <h4>You are currently using {color} mode</h4>
        </div>
    )
}