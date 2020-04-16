const ball = $('.ball')[0].style
let hits = 0
let move

//on ball click
$('.ball').click( function() {
	hits = hits + 1
	$('#hit')[0].innerHTML = `Hits:${hits}`
	if ( hits % 2) {
		ball.backgroundColor = 'green'
	} else if ( !(hits % 2)) {
		ball.backgroundColor = 'blue'
	} 
	if ( !(hits % 3)){
		ball.backgroundColor = 'red'
	}	
})

// new coordinates
const maxLeft = window.innerWidth - 100 - 120 // ширина вікна - два по 50 бордери - пів макс діаметра кульки
const maxBott = window.innerHeight - 100 - 120

//Start
$('button').click( () => {
		ball.width = $('#size')[0].value * 50 + 'px'
		ball.height = $('#size')[0].value * 50 + 'px'
		let x = Math.random() * Math.floor(maxLeft)
		let y = Math.random() * Math.floor(maxBott)
		ball.transform = `translate(${x}px, ${y}px)`
		ball.transition = `transform ${5 / $('#speed')[0].value}s`
		hits = 0
		move = $('#timer')[0].value * 10
		alert('Start !')
		moving()
		document.querySelector('.ball').addEventListener('transitionend', moving())
})

		
function moving() {
	let int = setInterval( function() {
		console.log(move)
		move--;
			if (move <= 0) {
				clearInterval(int)
				console.log('fin')
				alert(`Yours score is ${hits}! The end.`)
				return
			} else {
				let x = Math.random() * Math.floor(maxLeft)
				let y = Math.random() * Math.floor(maxBott)
				ball.transform = `translate(${x}px, ${y}px)`
				ball.transition = `transform ${5 / $('#speed')[0].value}s`
			}
	}, 5000 /$('#speed')[0].value)
}