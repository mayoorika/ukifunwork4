// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '750340338506021', // your App ID
        'clientSecret'  : '86e0f54b2ea1e684053e2b7c98199606', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'DC0G5y2WYHMnFqTpp4dQzanae',
        'consumerSecret'    : 'iwPwrPFvXqSQL1FiV8nrHaTLXaKqvtLqBqFNF7uuOWkGcyasp8',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
