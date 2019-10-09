const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const environmentConfigs = ['demo', 'dist'];
const env = args.env || 'demo';

process.env.REACT_WEBPACK_ENV = env;

const configs = { };

environmentConfigs.forEach(env => {
    configs[env] = require(path.join(__dirname, 'cfg/' + env))
});

const buildConfig = wantedEnv => {
    const isValid = wantedEnv && wantedEnv.length > 0 && ~~environmentConfigs.indexOf(wantedEnv);
    const validEnv = isValid ? wantedEnv : 'demo';

    return configs[validEnv];
};

module.exports = buildConfig(env);
