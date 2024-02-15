import Linking from 'react-native';

async function SignIn() {
    const state = `fK48ajhqk6kxBjhcCR4psygqmtrXBGA2voWH18uxSIbqm4suMM`
    const clientId = ''
    const redirectUri = 'https://www.google.com'
    const allowSignup = true

    const url=`https://github.com/login/oauth/authorize?client_id='${clientId}'&redirect_uri='${redirectUri}'&state='${state}'&allow_signup='${allowSignup}'`

    await Linking.openURL(url);
}

module.exports = SignIn;