export const authConfig = {
    clientId: 'oauth2-pkce-client',
    authorizationEndpoint: "https://localhost:9090/realms/fitness-tracker/protocol/openid-connect/auth",
    tokenEndpoint: "https://localhost:9090/realms/fitness-tracker/protocol/openid-connect/token",
    redirectUri: 'http://localhost:5173',
    scope: 'openid profile email offline_access',
    onRefreshTokenExpire: (event) => event.logIn(),
  }