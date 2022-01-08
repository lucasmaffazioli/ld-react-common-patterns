import { Layout } from "./Layout";

export default function LayoutComponent() {
	return (
		<div>
			<Layout header={<p>Im header 1</p>} body={<p>Im body</p>} />
		</div>
	)
}