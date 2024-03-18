const size = {
	xs: '400px', // for small screen mobile
	sm: '600px', // for mobile screen
	semiMd: '800px', // for mobile screen
	md: '900px', // for tablets
	lg: '1280px', // for laptops
	semiXl: '1330px', // for laptops
	xl: '1440px', // for desktop / monitors
	xxl: '1920px', // for big screens
}

export const device = {
	xs: `(max-width: ${size.xs})`,
	sm: `(max-width: ${size.sm})`,
	semiMd: `(max-width: ${size.semiMd})`,
	md: `(max-width: ${size.md})`,
	lg: `(max-width: ${size.lg})`,
	semiXl: `(min-width: ${size.semiXl})`,
	xl: `(max-width: ${size.xl})`,
	xxl: `(max-width: ${size.xxl})`,
}
