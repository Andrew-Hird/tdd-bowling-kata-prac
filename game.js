module.exports = {
    scoreFrame: scoreFrame
}

function scoreFrame(frame, nextFrame) {
    if (frame[0] + frame[1] === 10) {
        return scoreSpareFrame(frame, nextFrame)
    } else {
        return scoreNormalFrame(frame)
    }
}

function scoreSpareFrame(frame, nextFrame) {
    return frame[0] + frame[1] + nextFrame[0]
}

function scoreNormalFrame(frame) {
  return frame[0] + frame[1]
}
