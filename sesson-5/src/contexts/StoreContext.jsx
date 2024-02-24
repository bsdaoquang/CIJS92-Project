/** @format */

import { createContext } from 'react';

const initValues = {
	theme: 'light',
	language: 'vie',
};
const StoreContext = createContext(initValues);

export default StoreContext;
