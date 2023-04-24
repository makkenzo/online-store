import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

const CategoryCard = ({ title, image, linkTo }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [springProps, setSpringProps] = useSpring(() => ({
        scale: 1,
        config: { tension: 300, friction: 10, mass: 1 },
    }));

    const handleHover = (e) => {
        setIsHovered(!isHovered);
        setSpringProps({ scale: isHovered ? 1 : 1.1 });
    };

    return (
        <div className="relative w-full">
            <animated.div
                className="absolute inset-0 flex items-center justify-center z-10"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                style={{ transform: springProps.scale.interpolate((x) => `scale(${x})`) }}
            >
                <h3 className="text-white text-4xl font-normal text-center">{title}</h3>
            </animated.div>
            <img src={image} alt={title} className="w-full h-auto" />
            <div
                className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${
                    isHovered ? 'opacity-40' : ''
                }`}
            ></div>
        </div>
    );
};

export default CategoryCard;
