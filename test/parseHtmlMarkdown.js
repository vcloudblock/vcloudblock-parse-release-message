const parseMessage = require('../index');

const testData = {
    tag: 'v2.3.0',
    version: '2.3.0',
    files: [
      {
        url: 'VCloudBlock-Desktop_2.3.0.exe',
        sha512: '2gm35cf5/N+VEGPsGyz3G8UznHngKu9vI8QS1GF/YOpIkvN8cONSXJpZp6P6+JaoTSTnD8oNwbmL1emLytorKA==',
        size: 321531435
      }
    ],
    path: 'VCloudBlock-Desktop_2.3.0.exe',
    sha512: '2gm35cf5/N+VEGPsGyz3G8UznHngKu9vI8QS1GF/YOpIkvN8cONSXJpZp6P6+JaoTSTnD8oNwbmL1emLytorKA==',
    releaseDate: '2022-02-25T07:32:32.229Z',
    releaseName: "This is a test, don't use this release.",
    releaseNotes: '<h2>Change Log (en)</h2>\n' +
      '<ul>\n' +
      '<li>\n' +
      '<p><strong>New feature</strong></p>\n' +
      '<ol>\n' +
      '<li>Feature 1 (First release, only use to test the update function)</li>\n' +
      '<li>Feature 2 (First release, only use to test the update function)</li>\n' +
      '</ol>\n' +
      '</li>\n' +
      '<li>\n' +
      '<p><strong>Fix bug</strong></p>\n' +
      '<ol>\n' +
      '<li>Bug 1 (First release, only use to test the update function)</li>\n' +
      '<li>Bug 2 (First release, only use to test the update function)</li>\n' +
      '</ol>\n' +
      '</li>\n' +
      '</ul>\n' +
      '<h2>更改日志 (zh-cn)</h2>\n' +
      '<ul>\n' +
      '<li>\n' +
      '<p><strong>新功能</strong></p>\n' +
      '<ol>\n' +
      '<li>功能1 （首次发布，仅用于测试更新功能）</li>\n' +
      '<li>功能2 （首次发布，仅用于测试更新功能）</li>\n' +
      '</ol>\n' +
      '</li>\n' +
      '<li>\n' +
      '<p><strong>修复错误</strong></p>\n' +
      '<ol>\n' +
      '<li>错误1 （首次发布，仅用于测试更新功能）</li>\n' +
      '<li>错误2 （首次发布，仅用于测试更新功能）</li>\n' +
      '</ol>\n' +
      '</li>\n' +
      '</ul>'
}

const parsedMessage = parseMessage(testData.releaseNotes, { html: true });
console.log("parsedMessage=", parsedMessage);
