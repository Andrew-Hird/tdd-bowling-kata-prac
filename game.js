module.exports = {
    scoreFrame: scoreFrame
}

function scoreFrame(frame, nextFrame, nextNextFrame) {
    if (frame[0] === 10 && nextFrame[0] === 10) {
      return scoreDoubleStrike(frame, nextFrame, nextNextFrame)

    } else if (frame[0] === 10) {
        return scoreSingleStrike(frame, nextFrame)

    } else if (frame[0] + frame[1] === 10) {
        return scoreSpareFrame(frame, nextFrame)

    } else {
        return scoreNormalFrame(frame)
    }
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
