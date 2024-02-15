import Linking from 'react-native';

async function SignIn() {
    const state = 'fK48ajhqk6kxBjhcCR4psygqmtrXBGA2voWH18uxSIbqm4suMM' //not the state I'm using in my app fyi
    const clientId = ''
    const allowSignup = true

    const url=`https://github.com/login/oauth/authorize?client_id='${clientId}'&state='${state}'&allow_signup='${allowSignup}'`

    await Linking.openURL(url);
}

module.exports = SignIn;