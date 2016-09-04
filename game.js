module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, nextFrame) {
  if (frame[0] + frame[1] === 10) {
    return frame[0] + frame[1] + nextFrame[0]
  }
  return frame[0] + frame[1]
}
