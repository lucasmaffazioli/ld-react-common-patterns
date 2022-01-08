export default function Section({ title, children }) {
	return (
		<div style={{ border: 'solid 2px black', margin: '40px' }}>
			<h1>{title}</h1>
			<hr />
			<br />
			{children}
		</div>
	)
}