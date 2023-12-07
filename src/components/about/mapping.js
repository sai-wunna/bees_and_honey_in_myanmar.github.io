import { data } from './data'

export function mapping(x, y, setLocationData) {
  if (x >= 460 && x <= 490 && y >= 150 && y <= 180) {
    setLocationData(data[0])
    return 1
  } else if (x >= 420 && x <= 450 && y >= 160 && y <= 190) {
    setLocationData(data[1])
    return 2
  } else if (x >= 395 && x <= 430 && y >= 210 && y <= 250) {
    setLocationData(data[2])
    return 3
  } else if (x >= 275 && x <= 325 && y >= 335 && y <= 385) {
    setLocationData(data[3])
    return 4
  } else if (x >= 390 && x <= 420 && y >= 340 && y <= 380) {
    setLocationData(data[4])
    return 5
  } else if (x >= 350 && x <= 380 && y >= 365 && y <= 405) {
    setLocationData(data[5])
    return 6
  } else if (x >= 500 && x <= 560 && y >= 355 && y <= 415) {
    setLocationData(data[6])
    return 7
  } else if (x >= 400 && x <= 445 && y >= 400 && y <= 445) {
    setLocationData(data[7])
    return 8
  } else if (x >= 370 && x <= 420 && y >= 455 && y <= 515) {
    setLocationData(data[8])
    return 9
  } else if (x >= 200 && x <= 265 && y >= 490 && y <= 550) {
    setLocationData(data[9])
    return 10
  } else if (x >= 465 && x <= 525 && y >= 485 && y <= 535) {
    setLocationData(data[10])
    return 11
  } else if (x >= 290 && x <= 355 && y >= 510 && y <= 570) {
    setLocationData(data[11])
    return 12
  } else if (x >= 360 && x <= 410 && y >= 520 && y <= 570) {
    setLocationData(data[12])
    return 13
  } else if (x >= 235 && x <= 300 && y >= 550 && y <= 610) {
    setLocationData(data[13])
    return 14
  } else if (x >= 490 && x <= 530 && y >= 550 && y <= 585) {
    setLocationData(data[14])
    return 15
  } else if (x >= 310 && x <= 375 && y >= 580 && y <= 645) {
    setLocationData(data[15])
    return 16
  } else if (x >= 385 && x <= 450 && y >= 575 && y <= 635) {
    setLocationData(data[16])
    return 17
  } else if (x >= 450 && x <= 555 && y >= 620 && y <= 670) {
    setLocationData(data[17])
    return 18
  } else if (x >= 340 && x <= 390 && y >= 650 && y <= 700) {
    setLocationData(data[18])
    return 19
  } else if (x >= 455 && x <= 495 && y >= 670 && y <= 710) {
    setLocationData(data[19])
    return 20
  } else if (x >= 445 && x <= 495 && y >= 725 && y <= 775) {
    setLocationData(data[20])
    return 21
  } else if (x >= 495 && x <= 565 && y >= 800 && y <= 875) {
    setLocationData(data[21])
    return 22
  }
  return false
}
