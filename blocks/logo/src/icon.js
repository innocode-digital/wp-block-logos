import { SVG, Path } from '@wordpress/primitives';

export default ({ size }) => (
	<SVG width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
		<Path
			fillRule="evenodd"
			d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
		/>
		<Path d="M13 28V9.00002H16.096V25H23V28H13Z" />
		<Path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" />
	</SVG>
);
