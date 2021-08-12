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

const shape = require('./public/data/sightings_data/sightings.json')
console.log(shape);

const location = {latitude: shape.latitude, longitude: shape.longitude}
console.log(location)

const marker = (shape.shape, shape.location) => {
    boomerang: Boomerang.location,
    cigar: Cigar.location,
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


export default marker