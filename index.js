const ERROR_MSG = require('./constants')

class WaterCalculator {
    static calculateWaterAmount(landscape) {
        const isLandscapeInvalid = !Array.isArray(landscape)
            || landscape.length > 32000
            || !landscape.length
            || landscape.some(el => el > 32000)
            || landscape.some(el => typeof el !== 'number');

        if (isLandscapeInvalid) {
            return ERROR_MSG;
        }

        let leftPointer = 0;
        let rightPointer = landscape.length - 1;

        let result = 0;

        let leftMax = 0;
        let rightMax = 0;

        while (leftPointer < rightPointer) {
            if (landscape[leftPointer] < landscape[rightPointer]) {
                landscape[leftPointer] >= leftMax ? leftMax = landscape[leftPointer] : result += leftMax - landscape[leftPointer];
                ++leftPointer;
            } else {
                landscape[rightPointer] >= rightMax ? rightMax = landscape[rightPointer] : result += rightMax - landscape[rightPointer];
                --rightPointer;
            }
        }

        return result;
    }
}

module.exports = WaterCalculator;
