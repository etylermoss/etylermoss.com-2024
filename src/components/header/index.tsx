import { useState } from 'react';
import { Link } from "react-router-dom";
import Select, { SingleValue } from 'react-select'
import { Trans } from "@lingui/macro";

import { locales, dynamicActivateLocale, getCurrentLocale } from "@/i18n";

import './index.scss';

type OptionType = {
	value: string;
	label: string;
};

const languageOptions: OptionType[] = locales.map(x => ({value: x.code, label: x.flag}));

const Header = () => {
	const [selectedOption, setSelectedOption] = useState(languageOptions.find(x => x.value === getCurrentLocale()));

	const changeLanguage = (option: SingleValue<OptionType>) => {
		setSelectedOption(option!);

		dynamicActivateLocale(option!.value);
	};

	return (
		<div className="component-header">
			<div className="left">
			</div>
			<nav className="center">
				<Link to={`/`} className="nav"><Trans>Home</Trans></Link>
				<span>|</span>
				<Link to={`/contact`} className="nav"><Trans>Contact</Trans></Link>
			</nav>
			<div className="right">
				<Select options={languageOptions} defaultValue={selectedOption} onChange={changeLanguage} />
			</div>
		</div>
	)
};

export default Header;