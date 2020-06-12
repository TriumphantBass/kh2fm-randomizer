import { Button, Modal } from "antd";
import React from "react";
import { useToggle } from "../../hooks/useToggle";

export const ModalHelp: React.FC = () => {
	const [modalVisible, toggleModalVisible] = useToggle(false);

	return (
		<>
			<Button onClick={toggleModalVisible} style={{ marginLeft: 16 }}>
				Help
			</Button>

			<Modal
				title="Help"
				visible={modalVisible}
				onCancel={toggleModalVisible}
				footer={<Button onClick={toggleModalVisible}>Back</Button>}
			>
				<p>
					Set a name for the seed, or click the 'Random' button to give it a
					random name. This name will set the randomness that the seed will be
					based off.
				</p>

				<p>
					Change the settings to your liking, toggle things on and off, change
					how things will be randomized. Make the seed work how you want to play
					it.
				</p>

				<ul>
					<li>
						<b>Vanilla:</b> this will leave the option as it is normally in the
						game, it will not be changed.
					</li>
					<li>
						<b>Replace:</b> this will add the option's rewards to the pool, and
						replace their location with useless items. Useful if you like the
						rewards of a world but you don't want to visit it.
					</li>
					<li>
						<b>Randomize:</b> this will add the option's rewards to the pool,
						and their locations will be able to get anything.
					</li>
				</ul>

				<p>
					After setting a name and the options for the seed, you can download it
					by pressing 'Download Seed'. Choose the correct language patch for
					your game when downloading.
				</p>

				<p>
					You can check the 'Spoiler Logs' to see where everything was
					randomized to.
				</p>
			</Modal>
		</>
	);
};