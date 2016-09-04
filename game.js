module.exports = {
    scoreFrame: scoreFrame
}

function scoreFrame(frame, nextFrame) {
    if (frame[0] === 10) {
      return scoreSingleStrike (frame, nextFrame)

    } else if (frame[0] + frame[1] === 10) {
        return scoreSpareFrame(frame, nextFrame)

    } else {
        return scoreNormalFrame(frame)
    }
}

function scoreSingleStrike (frame, nextFrame) {
  return frame[0] + nextFrame[0] + nextFrame[1]
}

function scoreSpareFrame(frame, nextFrame) {
    return frame[0] + frame[1] + nextFrame[0]
}

function scoreNormalFrame(frame) {
  return frame[0] + frame[1]
}
