import StandardSystem from "./standard.system";

const systemFactory = (code, list) => {
	if (code === "s") { return new StandardSystem(list); }
	return null;
};

export default systemFactory;