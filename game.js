module.exports = {
    scoreFrame: scoreFrame
}

function scoreFrame(frame, nextFrame, nextNextFrame) {
    if (isDoubleStrike(frame, nextFrame)) {
      return scoreDoubleStrike(frame, nextFrame, nextNextFrame)

    } else if (isSingleStrike(frame)) {
        return scoreSingleStrike(frame, nextFrame)

    } else if (isSpare(frame, nextFrame)) {
        return scoreSpareFrame(frame, nextFrame)

    } else {
        return scoreNormalFrame(frame)
    }
}

function isDoubleStrike(frame, nextFrame){
  return frame[0] === 10 && nextFrame[0] === 10
}
function isSingleStrike(frame) {
  return frame[0] === 10
}
function isSpare(frame, nextFrame) {
  return frame[0] + frame[1] === 10
}

function scoreDoubleStrike(frame, nextFrame, nextNextFrame) {
    return frame[0] + nextFrame[0] + nextNextFrame[0]
}
function scoreSingleStrike(frame, nextFrame) {
    return frame[0] + nextFrame[0] + nextFrame[1]
}
function scoreSpareFrame(frame, nextFrame) {
    return frame[0] + frame[1] + nextFrame[0]
}
function scoreNormalFrame(frame) {
    return frame[0] + frame[1]
}
