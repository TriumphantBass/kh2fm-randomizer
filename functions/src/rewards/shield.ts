import { Reward } from "./Reward";
import { RewardType } from "./RewardType";

export const shieldRewards: { [name: string]: Reward } = {
	GENJI_SHIELD: {
		type: RewardType.SHIELD,
		name: "Genji Shield",
		value: "0091",
	},
	OGRE_SHIELD: {
		type: RewardType.SHIELD,
		name: "Ogre Shield",
		value: "008D",
	},
	NOBODY_GUARD: {
		type: RewardType.SHIELD,
		name: "Nobody Guard",
		value: "0093",
	},
	FROZEN_PRIDE: {
		type: RewardType.SHIELD,
		name: "Frozen Pride",
		value: "0228",
	},
	AKASHIC_RECORD: {
		type: RewardType.SHIELD,
		name: "Akashic Record",
		value: "0092",
	},
};