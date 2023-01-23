import React from 'react'
import PropTypes from 'prop-types'

const toRadians = angle => angle * (Math.PI / 180);

const IconArc = ({
    icons,
    iconWidth,
    clickHandler = () => null,
    padding = 0,
    titleText = [],
    style = {},
    arcStart = 0,
    arcLength = 360
}) => {
    const iconRadius = Math.sqrt(2 * Math.pow(iconWidth + padding, 2)) / 2;
    const N = icons.length;
    const arc = 180 - (360 - arcLength) / 2;
    const a = arc / N;
    const sinARadians = Math.sin(toRadians(a));
    const radius = Math.abs((iconRadius - iconRadius * sinARadians) / sinARadians);
    const componentWidth = Math.floor(radius * 2 + iconRadius * 4);
    const CX = componentWidth / 2;
    const CY = CX;
    const iconArcStyle = {
        position: 'relative',
        width: componentWidth + 'px',
        height: componentWidth + 'px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: CX + 'px',
        ...style
    };
    const iconSegment = 2 * Math.PI * arc / 180 / N;
    const halfIconWidth = Math.floor(iconWidth / 2);
    const R = radius + iconRadius;
    let segment = arcStart;

    return <div style={iconArcStyle}>
        {
            icons.map((icon, index) => {
                const x = Math.floor(CX + R * Math.cos(segment)) - halfIconWidth;
                const y = Math.floor(CY + R * Math.sin(segment)) - halfIconWidth;
                segment += iconSegment;

                const iconStyle = {
                    position: 'absolute',
                    left: x + 'px',
                    top: y + 'px',
                    width: iconWidth + 'px',
                    height: iconWidth + 'px',
                    cursor: 'pointer'
                };

                const title = titleText[index] || '';

                return <img
                    key={index}
                    style={iconStyle}
                    onClick={() => clickHandler(index)}
                    src={icon}
                    title={title}
                    alt={title}
                />
            })
        }
    </div>
};

IconArc.propTypes = {
    icons: PropTypes.array.isRequired,
    iconWidth: PropTypes.number.isRequired,
    clickHandler: PropTypes.func,
    padding: PropTypes.number,
    titleText: PropTypes.array,
    style: PropTypes.object,
    arcStart: PropTypes.number,
    arcLength: PropTypes.number
};

export default IconArc;
