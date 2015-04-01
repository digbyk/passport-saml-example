module.exports = {
	development: {
		app: {
			name: 'Passport SAML strategy example',
			port: process.env.PORT || 3000
		},
		passport: {
			strategy: 'saml',
			saml: {
				path: '/login/callback',
				entryPoint: 'https://dev-657956.oktapreview.com/app/sophosdev657956_digbytest_1/exk3ofqh22exDXaxT0h7/sso/saml',
				issuer: 'http://www.okta.com/exk3ofqh22exDXaxT0h7'
			}
		}
	}
}
