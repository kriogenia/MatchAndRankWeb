import Free4AllSystem from "./free4AllSystem";

const systemFactory = (code, list) => {
	if (code === "f") { return new Free4AllSystem(list); }
	return null;
};

export default systemFactory;