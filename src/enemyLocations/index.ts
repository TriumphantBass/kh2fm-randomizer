import { Enemy, EnemyType } from "../enemies/Enemy";
import { absentSilhouettesEnemyLocations } from "./absentSilhouettes";
import { agrabahEnemyLocations } from "./agrabah";
import { beastsCastleEnemyLocations } from "./beastsCastle";
import { cavernOfRemembranceEnemyLocations } from "./cavernOfRemembrance";
import { disneyCastleEnemyLocations } from "./disneyCastle";
import { EnemyLocation } from "./EnemyLocation";
import { halloweenTownEnemyLocations } from "./halloweenTown";
import { hollowBastionEnemyLocations } from "./hollowBastion";
import { landOfDragonsEnemyLocations } from "./landOfDragons";
import { mushroomsEnemyLocations } from "./mushrooms";
import { olympusEnemyLocations } from "./olympus";
import { dataOrganizationXIIIEnemyLocations } from "./dataOrganizationXIII";
import { poohEnemyLocations } from "./pooh";
import { portRoyalEnemyLocations } from "./portRoyal";
import { prideLandsEnemyLocations } from "./prideLands";
import { simulatedTwilightTownEnemyLocations } from "./simulatedTwilightTown";
import { spaceParanoidsEnemyLocations } from "./spaceParanoids";
import { timelessRiverEnemyLocations } from "./timelessRiver";
import { twilightTownEnemyLocations } from "./twilightTown";
import { twtnwEnemyLocations } from "./twtnw";

export const enemyLocations: EnemyLocation[] = [
	...absentSilhouettesEnemyLocations,
	...agrabahEnemyLocations,
	...beastsCastleEnemyLocations,
	...cavernOfRemembranceEnemyLocations,
	...disneyCastleEnemyLocations,
	...halloweenTownEnemyLocations,
	...hollowBastionEnemyLocations,
	...landOfDragonsEnemyLocations,
	...mushroomsEnemyLocations,
	...olympusEnemyLocations,
	...dataOrganizationXIIIEnemyLocations,
	...poohEnemyLocations,
	...portRoyalEnemyLocations,
	...prideLandsEnemyLocations,
	...simulatedTwilightTownEnemyLocations,
	...spaceParanoidsEnemyLocations,
	...timelessRiverEnemyLocations,
	...twilightTownEnemyLocations,
	...twtnwEnemyLocations,
];

export const enemies = enemyLocations
	.map(location => ({
		...location,
		enemies: location.enemies.filter(
			({ enemy }) => enemy.type !== EnemyType.BOSS
		),
	}))
	.filter(location => location.enemies.length > 0);
export const enemiesMap = new Map<string, Enemy>();
for (const location of enemyLocations) {
	for (const { enemy } of location.enemies) {
		if (enemy.type !== EnemyType.BOSS) {
			enemiesMap.set(enemy.value, enemy);
		}
	}
}

export const bosses = enemyLocations
	.map(location => ({
		...location,
		enemies: location.enemies.filter(
			({ enemy }) => enemy.type === EnemyType.BOSS
		),
	}))
	.filter(location => location.enemies.length > 0);
