export default function Article({ title, content, author }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{content}</p>
			<p>Article written by: {author}</p>
		</div>
	)
}