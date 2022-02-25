const parseMessage = require('../index');

const testData = `## Change Log (en)

- **New feature**

    1. Feature 1 (First release, only use to test the update function)
    2. Feature 2 (First release, only use to test the update function)

- **Fix bug**

    1. Bug 1 (First release, only use to test the update function)
    2. Bug 2 (First release, only use to test the update function)

## 更改日志 (zh-cn)

- **新功能**

    1. 功能1 （首次发布，仅用于测试更新功能）
    2. 功能2 （首次发布，仅用于测试更新功能）

- **修复错误**

    1. 错误1 （首次发布，仅用于测试更新功能）
    2. 错误2 （首次发布，仅用于测试更新功能）`

const parsedMessage = parseMessage(da2);
console.log("parsedMessage=", parsedMessage);
