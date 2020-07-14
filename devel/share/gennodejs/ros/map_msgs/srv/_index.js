
"use strict";

let SaveMap = require('./SaveMap.js')
let SetMapProjections = require('./SetMapProjections.js')
let GetMapROI = require('./GetMapROI.js')
let GetPointMap = require('./GetPointMap.js')
let GetPointMapROI = require('./GetPointMapROI.js')
let ProjectedMapsInfo = require('./ProjectedMapsInfo.js')

module.exports = {
  SaveMap: SaveMap,
  SetMapProjections: SetMapProjections,
  GetMapROI: GetMapROI,
  GetPointMap: GetPointMap,
  GetPointMapROI: GetPointMapROI,
  ProjectedMapsInfo: ProjectedMapsInfo,
};
