import * as lineIntersection from 'line-intersection';

const points = [{ x:1, y: 1 }, { x: 0, y: 0 }, { x: -1, y: 1 }, { x: 1, y: -1 }];

console.log(lineIntersection.findIntersection(points));

console.log(lineIntersection.isSegmentIntersected(points));

// comment 3