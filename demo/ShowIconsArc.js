import React from 'react';
import IconArc from '../src/index'
import Icon_gift from './images/gift.svg'
import Icon_github from './images/github.svg'
import Icon_gitlab from './images/gitlab.svg'
import Icon_meh from './images/meh.svg'
import Icon_move from './images/move.svg'
import Icon_music from './images/music.svg'
import Icon_sun from './images/sun.svg'
import Icon_sunrise from './images/sunrise.svg'
import Icon_sunset from './images/sunset.svg'
import Icon_twitter from './images/twitter.svg'
import Icon_umbrella from './images/umbrella.svg'
import Icon_youtube from './images/youtube.svg'

const icons = [
    Icon_gift,
    Icon_github,
    Icon_gitlab,
    Icon_meh,
    Icon_move,
    Icon_music,
    Icon_sun,
    Icon_sunrise,
    Icon_sunset,
    Icon_twitter,
    Icon_umbrella,
    Icon_youtube
];

const ShowIconsArc = () => <div>
    <IconArc
        icons={icons}
        iconWidth={48}
        arcStart={0}
        arcLength={90}
        style={{
            left: '-580px',
            top: '-520px',
            height: '600px'
        }}
    />
</div>;

export default ShowIconsArc;
