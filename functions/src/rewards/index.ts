import { Reward } from "../Reward";
import { bonusRewards } from "./bonus";
import { criticalRewards } from "./critical";
import { donaldRewards } from "./Donald";
import { formRewards } from "./form";
import { goofyRewards } from "./Goofy";
import { popupRewards } from "./popup";

export const rewardLocations: Reward[] = [
	...popupRewards,
	...bonusRewards,
	...goofyRewards,
	...donaldRewards,
	...formRewards,
	...criticalRewards,
];