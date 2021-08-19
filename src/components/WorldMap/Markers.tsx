import React, { useState, useEffect } from 'react'
import { geoEqualEarth, geoPath } from 'd3-geo'
import { feature } from 'topojson-client' 
import { Feature, FeatureCollection, Geometry } from 'geojson'

import boomerang from './public/icons/boomerang.svg';

import cigar from './public/icons/cigar.svg';

import circle from './public/icons/circle.svg';

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



const shape = fetch("./sightings.json").then(response => {
    return response.json();
}).then(data => console.log(data));

const location = {latitude: Sightings.latitude, longitude: shape.longitude}
console.log(location)

const marker = (data) => (shape, location) => {
    boomerang: Boomer
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