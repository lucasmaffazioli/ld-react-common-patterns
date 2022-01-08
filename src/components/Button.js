import classNames from "../utils/classNames"

export function Button({ leftIcon, children, primary, ...rest }) {

	return (
		<button type='button' {...rest} className={classNames('btn', primary && 'btn-primary')} >
			<span style={{ marginRight: '4px' }}>{leftIcon}</span>
			{children}
		</button>
	)
}

export function PrimaryButton({ children }) {
	return (
		<Button primary>{children}</Button>
	)
}