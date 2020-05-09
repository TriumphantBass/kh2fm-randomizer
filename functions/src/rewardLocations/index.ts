import { RewardLocation } from "../RewardLocation";
import { bonusRewardLocations } from "./bonus";
import { criticalRewardLocations } from "./critical";
import { donaldRewardLocations } from "./Donald";
import { formRewardLocations } from "./form";
import { goofyRewardLocations } from "./Goofy";
import { popupRewardLocations } from "./popup";

export const rewardLocations: RewardLocation[] = [
	...popupRewardLocations,
	...bonusRewardLocations,
	...goofyRewardLocations,
	...donaldRewardLocations,
	...formRewardLocations,
	...criticalRewardLocations,
];