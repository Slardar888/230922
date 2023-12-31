const package = require("./package.json")
const group = 'front'
const repo = package.name

module.exports = {
  "dryRun": true,
  "ci":false,
  "debug": true,
  "repositoryUrl":"https://git.airiot.tech/front-v4/portal.git",
  "branches": [
    { "name": "master", "prerelease": false },
  ],
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        { type: 'breaking', release: 'major' },
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'perf', release: 'patch' }
      ]
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "angular",
      "linkCompare": false,
      "linkReferences": false
    }],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    [
      "@semantic-release/exec",
      {
        "prepareCmd": "react-scripts build "
        // "prepareCmd": "./node_modules/.bin/airiot build && ./node_modules/.bin/airiot pack"
      }
    ],
    // [
    //   "@semantic-release/git",
    //   {
    //     "assets": [
    //       "package.json",
    //       "CHANGELOG.md"
    //     ],
    //     "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    //   }
    // ],
    // [
    //   "@gtiot/semantic-release-qiniu",
    //   {
    //     "host": "https://d.airiot.cn/",
    //     "assets": [
    //       {
    //         "path": "package.tgz",
    //         "key": `${group}/${repo}/${repo.replace('/', '_')}-<%= nextRelease.version %>.tgz`,
    //         "name": "package.tgz"
    //       }
    //     ]
    //   }
    // ],
    // [
    //   "@gtiot/semantic-release-airiot",
    //   {
    //     "group": group,
    //     "repoName": package.name,
    //     "draft": true
    //   }
    // ]
  ]
}