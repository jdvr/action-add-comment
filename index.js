const core = require('@actions/core');
const github = require('@actions/github');

function getMessage(template) {
    if (!template.includes('$')) {
        return template;
    }
    const varRegexp = /\$([A-Z])\w+/g;
    core.info(`Template ${template}`)
    const matches = template.match(varRegexp)
    core.info(`Matches ${matches}`)
    const m1 = matches.reduce((m, matched) => {
        core.info(`acc: ${m} - matched: ${matched}`)
        const varName = matched.slice(1)
        const h = m.replace(matched, process.env[varName]);
        core.info(h)
        return h
    }, template);
    core.info(m1)
    return m1;
}


async function main() {
    core.info(`running with ${core.getInput('comment')}`)
    try {
        if(github.context.eventName !== 'pull_request') {
            core.setFailed('This action must run only on PR triggered workflows');
        }

        const target = github.context.payload.pull_request.number;
        const message = getMessage(core.getInput('comment'));
        const [owner, repo] = github.context.payload.repository.full_name.split("/");
        const ocktokit = github.getOctokit(process.env.GITHUB_TOKEN);
        core.info(`Publishing ${message}, on ${owner}/${repo} #${target}`)
        await ocktokit.issues.createComment({
            owner,
            repo,
            issue_number: target,
            body: message
        });
    } catch(e) {
        core.setFailed(e)
    }
}

main();

module.exports = main;