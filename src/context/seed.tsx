import React, { useMemo, useState } from "react";
import { useConfigQuery } from "../hooks/useConfigQuery";
import { useSeedName } from "../hooks/useSeedName";
import { Seed } from "../seed/Seed";
import { useSeed } from "../seed/useSeed";
import { Configuration } from "../settings/Configuration";
import { GameMode } from "../settings/enums";
import { defaultExperimental, Experimental } from "../settings/Experimental";
import {
	defaultGoAModSettings,
	GoAModSettings,
} from "../settings/GoAModSettings";
import { defaultInclude, Include } from "../settings/Include";
import { defaultSettings, Settings } from "../settings/Settings";
import { defaultWorlds, Worlds } from "../settings/Worlds";

interface SeedContextType {
	seed: Seed | null;
	error: any;
	loading: boolean;
	configuration: Configuration;
	seedName: {
		name: string;
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onRandomSeed: () => void;
	};
	settings: [Settings, React.Dispatch<React.SetStateAction<Settings>>];
	worlds: [Worlds, React.Dispatch<React.SetStateAction<Worlds>>];
	include: [Include, React.Dispatch<React.SetStateAction<Include>>];
	experimental: [
		Experimental,
		React.Dispatch<React.SetStateAction<Experimental>>
	];
	gameMode: {
		mode: GameMode;
		goa: [GoAModSettings, React.Dispatch<React.SetStateAction<GoAModSettings>>];
	};
}

export const SeedContext = React.createContext<SeedContextType>({} as any);

export const SeedContextProvider: React.FC = ({ children }) => {
	const query = useConfigQuery();

	const seedName = useSeedName();

	const [settings, setSettings] = useState<Settings>({
		...defaultSettings,
		...(query.settings || {}),
	});

	const [worlds, setWorld] = useState<Worlds>({
		...defaultWorlds,
		...(query.worlds || {}),
	});

	const [include, setInclude] = useState<Include>({
		...defaultInclude,
		...(query.include || {}),
	});

	const [goa, setGoA] = useState<GoAModSettings>({
		...defaultGoAModSettings,
		...(query.goa || {}),
	});

	const [experimental, setExperimental] = useState<Experimental>(
		defaultExperimental
	);

	const configuration = useMemo<Configuration>(
		() => ({
			name: seedName.name,
			settings,
			worlds,
			include,
			experimental,
			gameMode: { mode: settings.gameMode, goa },
		}),
		[seedName.name, settings, worlds, include, experimental, goa]
	);

	const seed = useSeed(configuration);

	return (
		<SeedContext.Provider
			value={{
				...seed,
				configuration,
				seedName,
				settings: [settings, setSettings],
				worlds: [worlds, setWorld],
				include: [include, setInclude],
				experimental: [experimental, setExperimental],
				gameMode: { mode: settings.gameMode, goa: [goa, setGoA] },
			}}
		>
			{children}
		</SeedContext.Provider>
	);
};
