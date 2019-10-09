import React from 'react';
import IconArc from '../src/index'
import Icon_activity from './images/activity.svg'
import Icon_airplay from './images/airplay.svg'
import Icon_alert from './images/alert-triangle.svg'
import Icon_bluetooth from './images/bluetooth.svg'
import Icon_box from './images/box.svg'
import Icon_briefcase from './images/briefcase.svg'
import Icon_calendar from './images/calendar.svg'
import Icon_cloud from './images/cloud.svg'
import Icon_cloud_off from './images/cloud-off.svg'
import Icon_cloud_rain from './images/cloud-rain.svg'
import Icon_cloud_snow from './images/cloud-snow.svg'
import Icon_compass from './images/compass.svg'
import Icon_film from './images/film.svg'
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
    Icon_activity,
    Icon_airplay,
    Icon_alert,
    Icon_bluetooth,
    Icon_box,
    Icon_briefcase,
    Icon_calendar,
    Icon_cloud,
    Icon_cloud_off,
    Icon_cloud_rain,
    Icon_cloud_snow,
    Icon_compass,
    Icon_film,
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

const ShowIcons = () => <div>
    <IconArc icons={icons} iconWidth={48} />
</div>;

export default ShowIcons;
