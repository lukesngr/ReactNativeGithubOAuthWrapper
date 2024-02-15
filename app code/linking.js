 const config = {
    screens: {
      Login: 'login/:access_token',
    },
};
  
export const linking = {
    prefixes: ['appschema://'],
    config,
  };


export function Login({ navigation, route }) {
    const { access_token } = route.params;
    // implement own logic to use access token
  }