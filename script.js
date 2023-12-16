$(document).ready(() => {
	let ost = new Audio('ost.mp3');
	let win = new Audio('win.mp3');
	let jump = new Audio('jump.mp3');
	let hasPlayed = false;

	$(window).click(function () {
		$("li").removeClass("active");
	});

	$(".goal").on("click", (e) => {
		ost.pause();
		win.play();
	});

	$("li a").on("click", (e) => {
		jump.play();
		if (!hasPlayed) {
			ost.play();
			hasPlayed = true;
		}

		e.stopPropagation();
		e.target.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center"
		});
		setTimeout(() => {
			$(".mario").addClass("jump");
		
		}, 200);
		setTimeout(() => {
			$(".mario").removeClass("jump");
		}, 500);
		$("li").removeClass("active");
		$(e.target.parentElement).addClass("active");

		if (!$(e.target.parentElement).hasClass("visited")) {
			$(e.target.parentElement).addClass("visited");
		}
	});
});