<template>
	<div ref="root" class="root">
		<img
			ref="headerImg"
			class="headerImg"
			:src="headerImgUrl"
		/>

		<img class="flower imageToPreloadIntoMemory" :src="flowerUrl" />
		<img v-for="i in gridImages" :key="i" :src="i" class="imageToPreloadIntoMemory" />

		<h1 class="name"><span>Joe & Anastasiia</span></h1>
		<p class="action">~ celebrate their love and union on ~</p>
		<p class="date">09 . 28 . 19</p>
		<p class="time">12 : 00 pm</p>
		<p class="action">~ at Baker Beach, San Francisco, CA<br />with reception in nearby Sausalito ~</p>

		<div class="squareGrid imageGrid" ref="imageGrid">
			<div v-for="i in gridImages" :key="i">
				<img :src="i" />
			</div>
		</div>

		<p class="question">
			~ {{invitation.name}} ~<br />
			~ Will you stop by and say:
			<span class="emphasis">“HI?”</span>
			~
		</p>

		<div :class="[invitation.rsvp !== 'yes' ? 'rsvpHidden' : '', 'hooray']">
			<div :class="[invitation.rsvp !== 'yes' ? 'rsvpHidden' : '', 'hoorayInner']">
				🥳🎉
			</div>
		</div>

		<div class="answers">
			<a @click="rsvp('no')" :class="{active: invitation.rsvp === 'no'}">
				<div>
					<span class="rsvpKeyword">Sorry,</span><br />
					I am gonna have fun doing other things, but I will be thinking
					about you.
				</div>
			</a>
			<a @click="rsvp('yes')" :class="{active: invitation.rsvp === 'yes'}">
				<div>
					<span class="rsvpKeyword">Hack yeah!</span><br />
					I am gonna come and tell funny stories about you to your guests!
				</div>
			</a>

			<!-- <a @click="rsvp('undecided')">Not sure</a> -->
		</div>

		<p v-if="invitation.rsvp === 'yes'" class="assurance">
			~ Yaay! See you there! 🥳 ~
		</p>

		<div v-if="canBringGuests && invitation.rsvp === 'yes'" :class="['howMany']">

			<p v-if="invitation.rsvp === 'yes'" class="assurance">
				~ How many people will you bring including yourself? ~
			</p>

			<div class="howManyInput">
				<a class="increment" @click="increment"></a>
				<div class="count">
					<span>{{invitation.howMany}}</span>
				</div>
				<a class="decrement" @click="decrement"></a>
			</div>
		</div>

		<p class="assurance" v-if="invitation.rsvp === 'no'">
			~ See you soon anyways! 😊 ~
		</p>

		<p class="assurance" v-if="invitation.rsvp === 'undecided'">
			~ We will be your friends regardless of your answer! ~
		</p>

		<p class="assurance" v-if="invitation.rsvp !== 'undecided'">
			<button ref="save" @click="clickSave" class="btn btn-7 btn-7h icon-envelope"><span>Save it!</span></button>
		</p>

		<img class="flower" :src="flowerUrl" />

		<img class="footerImg" :src="footerImgUrl" />

		<!-- <p>Current response: {{ invitation.rsvp }}</p>

		<ul>
			<li v-for="t in rsvps" :key="t._id">{{ t.rsvp }} - {{ t._id }}</li>
		</ul> -->

	</div>
</template>

<style scoped lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Lato:100,700|Playfair+Display:400i,900&display=swap');

	.root {
		position: relative;
		background: white;
		width: 100%;
		height: 100%;
		overflow: auto;
		overflow-x: hidden;
		text-align: center;
		font-family: 'Playfair Display', serif;
		transform-style: preserve-3d;
		contain: strict content style;

		--rsvp-bottom-space: 6vw;
		--rsvp-font-size: 16px;

		font-size: calc( var(--rsvp-font-size) + 1vw );
	}

	img {
		object-fit: cover;
	}

	p {
		font-style: italic;
		margin-top: calc( var(--rsvp-font-size) + 5vw );
		margin-bottom: calc( var(--rsvp-font-size) + 5vw );
	}

	// styling from https://tympanus.net/Development/CreativeButtons/ {{

	.btn {
		border: none;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		background: none;
		cursor: pointer;
		padding: 25px 80px;
		display: inline-block;
		margin: 15px 30px;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 700;
		outline: none;
		position: relative;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;

		font-family: 'Lato', sans-serif;
	}

	.btn:before, .icon-heart:after, .icon-star:after, .icon-plus:after, .icon-file:before {
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		position: relative;
		-webkit-font-smoothing: antialiased;

		font-family: monospace;
	}

	.btn:after {
		content: '';
		position: absolute;
		z-index: -1;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}

	.icon-envelope:before {
		content: "✓";
	}

	.btn-7 {
		background: #17aa56;
		background: #94b44f;
		color: #fff;
		border-radius: 0px;
		// box-shadow: 0 5px #119e4d;
		padding: 25px 60px 25px 90px;

		span {
			padding-left: 20%;
			white-space: nowrap;
		}
	}

	.btn-7h:before {
		position: absolute;
		left: 0;
		width: 40%;
		font-size: 160%;
		line-height: 0.8;
		color: white;
	}

	.btn-success:before {
		content: "✨";
	}

	.btn-success, .btn-error {
		color: transparent;
	}

	@keyframes moveUp {
		0% {
			transform: translateY(-50%) translateY(50%);
			opacity: 0;
		}
		100% { 
			opacity: 1;
			transform: translateY(-50%) translateY(0);
		}
	}

	.btn-success:after {
		content: "Success!";
		-webkit-animation: moveUp 0.5s;
		-moz-animation: moveUp 0.5s;
		animation: moveUp 0.5s;
	}

	.btn-success:after, .btn-error:after {
		z-index: 1;
		color: #fff;
		left: 40%;
		top: 50%;
		transform: translateY(-50%);
	}

	// }}

	.imageToPreloadIntoMemory {
		opacity: 0.00001;
		position: fixed;
		top: 0;
		left: 0;
		pointer-events: none;
		user-select: none;
	}

	.headerImg {
		width: 100%;
		height: calc( 100vh - var(--rsvp-bottom-space) );

		// starts at this value, and is animated on scroll with JavaScript
		object-position: 50% 0%;
	}

	// looks good on android chrome and ios safari, but not android firefox.
	// @media (max-width: 600px) {
	// 	.name {
	// 		transform: translate(-50%, 50%) !important;
	// 	}
	// }

	.name {
		font-family: 'Playfair Display', serif;
		font-size: calc( var(--rsvp-font-size) + 5vw );
		font-weight: 900;
		text-transform: uppercase;
		color: white;

		position: absolute;
		bottom: var(--rsvp-bottom-space);
		margin: 0;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;

		span {
			padding: calc( var(--rsvp-font-size) + 1vw ) calc( var(--rsvp-font-size) + 3vw ) calc( var(--rsvp-font-size) + 1.7vw );
		}
	}

	.action {
		margin-top: 1.8em;
	}

	.date {
		font-size: calc( var(--rsvp-font-size) + 7vw );
		font-family: 'Lato', sans-serif;
		font-style: unset;
		margin-top: 0;
		margin-bottom: calc( var(--rsvp-font-size) + 1vw );
	}

	.time {
		font-size: calc( var(--rsvp-font-size) + 3vw );
		font-family: 'Lato', sans-serif;
		font-style: unset;
		margin-top: 0;
	}

	.squareGrid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		> * {
			display: block;
			position: relative;
			overflow: hidden;
		}

		> *::before {
			content: "";
			display: block;
			padding-top: 100%;
		}

		> * > * {
			display: block;
			position: absolute;
			left: 0; top: 0;
			width: 100%;
			height: 100%;
		}
	}

	.imageGrid {
		img {
			transform-origin: 50% 50%;

			will-change: transform;
			// initial value, gets animated by JS
			transform: translate3d(0, 0, 0.0001px) scale( 1.3 );
		}
	}

	.question {
		.emphasis {
			font-weight: 600;
			font-size: calc( var(--rsvp-font-size) + 1.3vw );
		}
	}

	.answers {
		display: flex;
		justify-content: center;
		width: 100%;
		transform: translateY(calc( -1 * ( var(--rsvp-font-size) + 1vw ) ));
		margin: 60px 0px;
		font-family: 'Lato', sans-serif;
		font-weight: bold;
		text-transform: uppercase;
		font-size: calc( var(--rsvp-font-size) + 0.5vw );
		color: white;

		@media (max-width: 600px) {
			flex-direction: column-reverse;
			align-items: center;
		}

		> a {
			background: #b1aaa5;
			padding: 20px;
			cursor: pointer;
			user-select: none;
			width: 30%;
			transition: box-shadow 0.4s;

			&:first-child {
				margin-right: 2em;
			}

			@media (max-width: 600px) {
				width: 50%;

				&:first-child {
					margin-right: 0;
				}

				&:nth-child(2) {
					margin-bottom: 2em;
				}
			}
		}

		> a:hover, > a.active {
			box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.4);
		}

		> a.active {
			background: #94b44f;
		}

		.rsvpKeyword {
			background: white;
			color: #333;
			padding: 0.02em 0.2em;
			font-size: calc( var(--rsvp-font-size) + 0.5vw );
		}
	}

	.assurance {
		margin-top: calc( var(--rsvp-font-size) + 7vw );
		margin-bottom: calc( var(--rsvp-font-size) + 1vw );
	}

	@keyframes hoorayAnim {
		0% {
			transform: translate3d(-50%, -25vh, 0.0001px);
			opacity: 0.00001;
		}
		50% {
			transform: translate3d(-50%, 0vh, 0.0001px);
			opacity: 1;
		}
		100% {
			transform: translate3d(-50%, 25vh, 0.0001px);
			opacity: 0.00001;
		}
	}

	.hooray {
		pointer-events: none;
		position: relative;
		width: 100%;
		font-size: 5em;

		&.rsvpHidden {
			height: 0;
		}
	}

	.hoorayInner {
		position: absolute;
		left: 50%;
		z-index: 1;
		transition: transform 1s, opacity 1s;
		opacity: 0;

		animation-duration: 3s;
		animation-name: hoorayAnim;

		&.rsvpHidden {
			pointer-events: none;

			animation-duration: 0s;
			animation-name: unset;
		}
	}

	.howMany {
		margin-top: calc( var(--rsvp-font-size) + 5vw );
		margin-bottom: calc( var(--rsvp-font-size) + 5vw );
	}

	.howManyInput {
		user-select: none;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;

		.count {
			width: calc( 100px + 10vw );
			height: calc( 100px + 5vw );
			text-align: center;
			background: #94b44f;
			color: white;
			font-family: monospace;
			font-size: calc( 64px + 6vw );
			position: relative;
			margin: calc( var(--rsvp-font-size) + 1vw ) 0;
			font-family: 'Playfair Display', serif;

			span {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -59%);
			}
		}

		.increment, .decrement {
			border-bottom: 1em solid rgba(0, 0, 0, 0.1);
			border-left: 1em solid transparent;
			border-right: 1em solid transparent;
		}

		.decrement {
			transform-origin: 50% 50%;
			transform: rotateZ(180deg);
		}
	}

	.flower {
		margin-top: calc( var(--rsvp-font-size) + 1vw );
		width: calc( 150px + 20vw );
		transform: translate3d(0, 0, 0.00001);
	}

	.footerImg {
		width: 100%;
		margin-top: calc( var(--rsvp-font-size) + 1vw );
		display: block;
	}
</style>

<script>
	import { WeddingInvitations } from "/imports/WeddingInvitations";
	import {ScrollObserver} from '../utils/ScrollObserver'

	const id = location.search && location.search
		.split("?")[1] // get query content
		.split('&')[0] // keep only the first part (trim off anything else like query paramsters that Facebook appends to URLs)

	if (!id) throw "URL does not have ID!";

	export default {
		data: () => ({
			headerImgUrl: '/apps/wedding-rsvp/photos/header.jpg',
			footerImgUrl: '/apps/wedding-rsvp/photos/proposed.jpg',
			flowerUrl: '/apps/wedding-rsvp/photos/flower.svg',
			gridImages: [
				'/apps/wedding-rsvp/photos/1.jpg',
				'/apps/wedding-rsvp/photos/2.jpg',
				'/apps/wedding-rsvp/photos/3.jpg',
				'/apps/wedding-rsvp/photos/4.jpg',
				'/apps/wedding-rsvp/photos/5.jpg',
				'/apps/wedding-rsvp/photos/6.jpg',
			],
		}),

		async created() {
			this.style = null;

			this.headerScrollObserver = null
			this.headerScrollHandler = null

			this.imageGridScrollObserver = null
			this.imageGridScrollHandler = null
		},

		computed: {
			/**
			 * @returns {boolean}
			 */
			canBringGuests() {
				return !peopleWithNoGuests.includes(this.invitation.name)
			},
		},

		mounted() {
			this.style = document.createElement("style");
            this.style.textContent = `
                body, html { background: white }
                #menuNode { display: none !important; }
			`;

			document.head.appendChild(this.style);

			const viewportHeight = this.$refs.root.clientHeight

			this.headerScrollObserver = new ScrollObserver({
				begin: 0,
				end: viewportHeight,
				container: this.$refs.root,
				useAnimationFrame: true,
			})

			const headerImg = this.$refs.headerImg

			this.headerScrollHandler = progress => {
				if (window.innerWidth / window.innerHeight < 1) return
				headerImg.style.setProperty('object-position', `50% ${progress * 100}%`)
			}

			this.headerScrollObserver.on('scroll', this.headerScrollHandler)

				const imageGrid = this.$refs.imageGrid
				const imageGridScrollBegin = imageGrid.offsetTop - viewportHeight
				const mobileAdjustment = window.innerWidth / window.innerHeight < 1 ? this.$refs.root.clientWidth * 0.3 : 0
				const imageGridScrollEnd = imageGrid.offsetTop - mobileAdjustment

				this.imageGridScrollObserver = new ScrollObserver({
					begin: imageGridScrollBegin,
					end: imageGridScrollEnd,
					container: this.$refs.root,
					useAnimationFrame: true,
				})

				const images = Array.from(imageGrid.querySelectorAll('img'))

				this.imageGridScrollHandler = progress => {
					if (isMobile.any()) return

					let image

					for (let i=0, l=images.length; i<l; i+=1) {
						image = images[i]
						image.style.setProperty('transform', `translate3d(0, 0, 0.0001px) scale(${1.3 - 0.29 * progress})`)
					}
				}

				this.imageGridScrollObserver.on('scroll', this.imageGridScrollHandler)
		},

		destroyed() {
			document.head.removeChild(this.style);
			this.headerScrollObserver.off('scroll', this.headerScrollHandler)
		},

		methods: {
			/**
			 * @param {'yes' | 'no' | 'undecided'} yesOrNo
			 */
			rsvp(yesOrNo) {
				Meteor.call("rsvpToWedding", yesOrNo, id);
			},

			increment() {
				Meteor.call("incrementHowMany", id);
			},

			decrement() {
				Meteor.call("decrementHowMany", id);
			},

			clickSave() {
				this.$refs.save.classList.add('btn-success')

				if (this.saveTimeout) clearTimeout(this.saveTimeout)

				this.saveTimeout = setTimeout(() => {
					this.$refs.save.classList.remove('btn-success')
					this.saveTimeout = undefined
				}, 1000)
			},
		},

		meteor: {
			$subscribe: {
				WeddingInvitations: []
			},

			invitation() {
				return WeddingInvitations.findOne(id) || defaultInvitation;
			},
		}
	};

	const defaultInvitation = {
		name: 'John Doe',
		howMany: 0,
		rsvp: 'undecided',
	}

	// from https://stackoverflow.com/questions/11381673
	const isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	const peopleWithNoGuests = [
		'Lilianna Esplino',
		'Yazmin Guerrero',
		'Cesar Zuniga',
		'Corrina Serna',
		'Shannie Chen',
		'Beatriz Marquez',
		'Clyde Brown',
		'Sungmin Gan',
		'Carlos Moreno',
	]
</script>