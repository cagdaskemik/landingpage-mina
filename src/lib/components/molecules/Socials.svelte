<script>
	import TelegramIcon from '$lib/icons/socials/telegram.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import PinterestIcon from '$lib/icons/socials/pinterest.svelte';
	import FacebookIcon from '$lib/icons/socials/facebook.svelte';
	import InstagramIcon from '$lib/icons/socials/instagram.svelte';
</script>

<div class="socials">
	<a href="#" target="_blank" rel="noopener noreferrer" title="Say Hi on Telegram">
		<TelegramIcon />
	</a>
	<a
		href="https://www.facebook.com/mina.freuler/"
		target="https://www.facebook.com/mina.freuler/"
		rel="me noreferrer"
		title="Say Hi on Facebook"
	>
		<FacebookIcon />
	</a>
	<a
		href="https://www.instagram.com/freumina"
		target="https://www.instagram.com/freumina"
		rel="noopener noreferrer"
		title="Check out my Instagram"
	>
		<InstagramIcon />
	</a>
	<a
		href="https://pinterest.com/minafreuler/"
		target="https://pinterest.com/minafreuler/"
		rel="noopener noreferrer"
		title="Check out my Pinterest"
	>
		<PinterestIcon />
	</a>
	<a href="#" target="_blank" rel="noopener noreferrer" title="Send an email">
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
