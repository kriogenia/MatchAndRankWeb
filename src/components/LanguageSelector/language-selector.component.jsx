import React from "react";
import i18n from "../../i18n";
import {Button, ClickAwayListener, Grow, MenuList, MenuItem, Paper, Popper} from "@material-ui/core";
import {errorToaster} from "../index";
import {useTranslation} from "react-i18next";
import {useStyles} from "./language-selector.styles";

const languages = ["en", "es", "gl"];

const LanguageSelectorComponent = () => {

	const [open, setOpen] = React.useState(false);
	const [loaded, setLoaded] = React.useState(true);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const {t} = useTranslation();
	const anchorRef = React.useRef(null);
	const classes = useStyles();

	const handleMenuItemClick = (event, index) => {
		setLoaded(false);
		setSelectedIndex(index);
		setOpen(false);
		i18n.changeLanguage(languages[index]).then(() => {
			setLoaded(true);
		}).catch(() => {
			errorToaster(t("error:languagechange"));
			setLoaded(true);
		});
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	return (
		<div>
			<Button color="inherit" onClick={handleToggle} ref={anchorRef}>
				{languages[selectedIndex]}
			</Button>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu">
									{languages.map((option, index) => (
										<MenuItem
											key={option}
											className={classes.uppercase}
											selected={index === selectedIndex}
											disabled={!loaded}
											onClick={(event) =>
												handleMenuItemClick(event, index)}
										>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);

};

export default LanguageSelectorComponent;