# Local AI Call Prompt

```text
请检查当前项目的本地 AI 调用配置。

要求：
1. 只从环境变量或 .env.local 读取 endpoint 和 key。
2. 不要把 key 打印到日志或最终输出。
3. 兼容 OpenAI Responses API 和 Chat Completions API。
4. 如果 endpoint 不支持 Responses API，自动建议切换到 chat-completions 模式。
5. 运行最小健康检查。
6. 输出诊断结果、失败原因、修复命令。
```
