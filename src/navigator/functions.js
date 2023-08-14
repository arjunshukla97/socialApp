import { navigationRef } from '.';

export const navigate = (name, params) => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params);
	}
};

export const universalGoBack = () => {
	if (navigationRef.isReady()) {
		navigationRef.goBack();
	}
};
