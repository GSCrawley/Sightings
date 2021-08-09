import React from 'react'

import Boomerang from './public/icons/boomerang.svg';

import Cigar from './public/icons/cigar.svg';

import Circle from './public/icons/circle.svg';

import Cross from './public/icons/cross.svg';

import Diamond from './public/icons/diamond.svg';

import Disk from './public/icons/disk.svg';

import Egg from './public/icons/egg.svg';

import Fireball from './public/icons/fireball.svg';

import Orb from './public/icons/orb.svg';

import Oval from './public/icons/oval.svg';

import Rectangle from './public/icons/rectangle.svg';

import Teardrop from './public/icons/teardrop.svg';

import Triangle from './public/icons/triangle.svg';

const data = require('./public/data/sightings_data/sightings.json')
console.log(data);

const location = {latitude: data.latitude, longitude: data.longitude}
console.log(location)

const marker = data => {
    boomerang: Boomerang, 
    this.Cigar, 
    circle: Circle, 
    cross: Cross, 
    diamond: Diamond, 
    disk: Disk,
    egg: Egg,
    fireball: Fireball, 
    orb: Orb, 
    oval: Oval,
    rectangle: Rectangle,
    teardrop: Teardrop,
    triangle: Triangle
 }


