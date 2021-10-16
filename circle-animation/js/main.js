const swiper = new Swiper('.swiper', {
	// Optional parameters
	speed: 2000,
	direction: 'vertical',
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//GSAP
function textCircleAnimation() {
	const circlrTimeLine = gsap.timeline();
	circlrTimeLine.fromTo(
		'.b-cricleText',
		{ opacity: 0.5, rotation: 0 },
		{ rotation: 360, opacity: 1, duration: 2, ease: 'sine.inOut' }
	);
}

function slideBoxAnimation() {
	const slideBoxTimeline = gsap.timeline();
	slideBoxTimeline.to('.l-slide', { rotation: 0, opacity: 1 }),
		slideBoxTimeline.to('.l-slide', {
			rotation: 5,
			opacity: 0,
		}),
		slideBoxTimeline.to('.l-slide', {
			rotation: 0,
			opacity: 1,
			delay: 1,
			dulation: 0.5,
		});
}

swiper.on('slideChange', () => {
	textCircleAnimation();
	slideBoxAnimation();
});
