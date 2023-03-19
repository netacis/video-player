const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay () {
    // console.log('Click al boton Play')
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause () {
    // console.log('Click al boton pausa')
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
}

$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handleBackward () {
    $video.currentTime -= 10
    // console.log('Para atrás 10 segundos')
}

function handleForward () {
    $video.currentTime += 10
    // console.log('Para adelante 10 segundos', $video.currentTime)
}


const $progress = document.querySelector("#progress")
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded () {
    // console.log('a cargado mi video', $video.duration)
    $progress.max = $video.duration
}

function handleTimeUpdate () {
    // console.log('holi', $video.currentTime)
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput () {
    // console.log($progress.value)
    $video.currentTime = $progress.value
}