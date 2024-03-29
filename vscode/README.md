<p align="center">
  <a href="" rel="noopener">
 <img height=180px src="/vscode/media/icon.png"></a>
</p>
<h1 align="center">CommandDash (Beta)</h1>
<div align="center">
<h3> Your Flutter AI Autopilot with Gemini Code & Vision</h3>

[![VScode Downloads](https://img.shields.io/visual-studio-marketplace/d/WelltestedAI.fluttergpt)](https://marketplace.visualstudio.com/items?itemName=WelltestedAI.fluttergpt&ssr=false#overview) [![VScode version](https://img.shields.io/visual-studio-marketplace/v/WelltestedAI.fluttergpt)](https://marketplace.visualstudio.com/items?itemName=WelltestedAI.fluttergpt&ssr=false#overview) [![License: APACHE](https://img.shields.io/badge/License-APACHE%202.0-yellow)](/LICENSE)
</div>
<img src="/assets/docs/poster.jpg"></a>

-----------------
CommandDash is a command-based coding assistant. It has built in agents that not only help you write code, but also auto run and debug it - performing various Flutter development tasks for you.

##### ✨ Powered by Gemini 
##### 🤝 Dart Analyzer Inside
##### 👨🏼‍💻 For and by Flutter Engineers

Currently in Beta, CommandDash is being built in open-sourced with the community.

-----------------
## Getting Started

##### 1. Create Free Gemini API Key
Visit [Makersuite by Google](https://makersuite.google.com/) and create your free API Key.
##### 2. Add the key in CommandDash Panel
Paste your API key in the input field in CommandDash Panel.

That's it. You're ready to use Dash AI. ✅

## Features

### 👨🏼‍💻 Multi-Code Chat Attachments
<p align="center">
<img src="/assets/docs/multi-code-attachment.gif" alt="Multi code chat with VSCode inside Gemini" width="500"/>
</p>

Attach multiple code snippets from different files in your inline chat. With full-context passed to Gemini, receive accurate responses and amend code across multiple files.

### 🚀 @Agents and /Commands

Use built in agents and commands to autopilot different kinds of tasks.

Currently, we support:

#### 1. `@workspace` agent.
Ask anything related to Flutter or Dart and get instant answers. Query your workspace using `@workspace` command.

#### 2. `/refactor` command.
<p align="center">
<img src="/assets/docs/refactor-command.png" alt="Multi code chat with VSCode inside Gemini" width="500"/>
</p>

More, coming very soon.

### ✨ Generate Inline Code

#### 1. **Code Block Completion**

Complete methods, classes or any other code blocks by running `Inline Code Generation` from the menu or via `cmd+shift+R`.

Specify details with comments for better accuracy. For example,

```dart
class Cart {
  // Properties
  List<Item> items = [];

  void addItem(Item item) {
    items.add(item);
  }

  void removeItem(Item item) {
    items.remove(item);
  }
  // get total price method
  **[cmd+shift+R]**
}
```

completes the next lines with:
``` dart
  double getTotalPrice() {
    double total = 0;
    for (Item item in items) {
      total += item.price;
    }
    return total;
  }
```

#### 2. **Widget from Image or Description**

Use Gemini's multimodal capabilities to create widget from a image with added description. 

Command: `Dash AI Create: Widget from Image or Description`

#### 3. **Code from Blueprint**

Get complete code from a blueprint of a class or function with the behaviour of functions, state management and architecture of your choice.

Command: `Dash AI Create: Code from Blueprint`

## FAQs

1. **How safe and secure is it to use, and can you explain why?**
- CommandDash is powered by Google's  Gemini Models and is secure to use for personal usage or work - [Safety and Security Guidelines](https://blog.google/technology/ai/google-gemini-ai/#responsibility-safety)

2. **Do I need to pay to use CommandDash?**

- Gemini PRO is currently in early access and is completely free to use for upto 60 requests for minute. Please check the [pricing](https://ai.google.dev/pricing) here.

3. **I am an Android Studio user. Can I use Dash AI?**
- We are coming soon for IntelliJ-based IDEs. *🤫 Secret: most of our core logic is written in Dart, allowing us to ship on any platform very very fast!*

## Contributing

A coding assistant for all is best built when all of us contribute. You can make contributions to the VSCODE or IntelliJ extension or also to [CommandDash CLI](https://github.com/Welltested-AI/commanddash) shared between the extensions.

### Ways to contribute

-  **File feature requests**: Suggest features that'll make your development process easier in the [issues board](https://github.com/Welltested-AI/fluttergpt/issues).

-  **Pick up open issues**: Pick up and fix existing issues open to the community in [issues board](https://github.com/Welltested-AI/fluttergpt/issues).

-  **Participate in discussions**: Help by sharing your ideas in the [active discussions](https://join.slack.com/t/welltested-ai/shared_invite/zt-25u09fty8-gaggH9HbmopB~4tialTrlA) in our community slack.

To get a sense of direction of where we're heading, please check out our [Roadmap](https://github.com/Welltested-AI/dash-ai?tab=readme-ov-file#roadmap).

## Community

Connect with like minded people building with Flutter and using AI to do so, every step of the way :D [Join Now](https://join.slack.com/t/welltested-ai/shared_invite/zt-25u09fty8-gaggH9HbmopB~4tialTrlA)

## License

Dash AI is released under the Apache License Version 2.0. See the [LICENSE](LICENSE) file for more information.