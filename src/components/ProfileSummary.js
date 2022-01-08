import { useState } from "react";
import { Button } from "./Button";

export default function ProfileSummary({ role, userName }) {
	const [systemSettingsOpen, setSystemSettingsOpen] = useState(false)

	return (
		<div>
			{role === 'guest' ?
				<h2>{`Error: User of role ${role} is not logged in!`}</h2>
				:
				<div>
					<h2>This is the profile summary of {userName}!</h2>
					{role === 'admin' && <Button onClick={() => setSystemSettingsOpen(true)} primary>Access system settings</Button>}
				</div>
			}
			{systemSettingsOpen &&
				<div>
					<h3>This is the System Settings</h3>
					<input id='timeout' type="text" />
					<label htmlFor="timeout">Timeout</label>
				</div>
			}
		</div>
	)
}