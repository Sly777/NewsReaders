#### CustomElements
- fix typo ([commit](https://github.com/Polymer/CustomElements/commit/93afeae))
- whitespace changes only ([commit](https://github.com/Polymer/CustomElements/commit/cc705ba))
- Remove MutationObserver filtering of script, style, and template elements ([commit](https://github.com/Polymer/CustomElements/commit/013d2b2))
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/CustomElements/commit/fcbb7df))

#### HTMLImports
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/HTMLImports/commit/5d39194))
- comments only ([commit](https://github.com/Polymer/HTMLImports/commit/4ee75be))
- tweak order of operations so that document._url is available at element upgrade time when using imports dynamically ([commit](https://github.com/Polymer/HTMLImports/commit/5eb2f21))

#### NodeBind
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/NodeBind/commit/bd0a059))
- test: use custom chrome launcher branch to enable harmony ([commit](https://github.com/Polymer/NodeBind/commit/91f161b))

#### PointerEvents
- Set buttons to undefined by default to catch lack of event.buttons support in PointerEvent constructor ([commit](https://github.com/Polymer/PointerEvents/commit/6e9b6d1))
- Merge pull request #102 from azakus/faster-constructor ([commit](https://github.com/Polymer/PointerEvents/commit/6fd360b))
- Put pointermap back, remove sidetable reference ([commit](https://github.com/Polymer/PointerEvents/commit/46ea569))
- fix karma paths for WeakMap ([commit](https://github.com/Polymer/PointerEvents/commit/b094f64))
- use shared WeakMap repo ([commit](https://github.com/Polymer/PointerEvents/commit/2b9bb40))
- Avoid for-in loops with explicity copied keys ([commit](https://github.com/Polymer/PointerEvents/commit/ae8833f))

#### PointerGestures
- Merge pull request #14 from azakus/faster-clone ([commit](https://github.com/Polymer/PointerGestures/commit/6bfae8a))
- cleanup karma paths for PointerEvents WeakMap usage ([commit](https://github.com/Polymer/PointerGestures/commit/1626b3a))
- Use explicit properties to avoid for-in loops ([commit](https://github.com/Polymer/PointerGestures/commit/9d77270))

#### ShadowDOM
- Merge pull request #270 from azakus/custom-element-callback-rename ([commit](https://github.com/Polymer/ShadowDOM/commit/5f4b9ce))
- {entered,left}DocumentCallback -> {entered,left}ViewCallback ([commit](https://github.com/Polymer/ShadowDOM/commit/9618144))
- Merge branch 'event-multiple-dispatch' of git://github.com/arv/ShadowDOM into arv-event-multiple-dispatch ([commit](https://github.com/Polymer/ShadowDOM/commit/3a994df))
- Merge pull request #269 from arv/fake-related-target ([commit](https://github.com/Polymer/ShadowDOM/commit/07c8f4d))
- Add work around for X-Tag issue related to relatedTarget ([commit](https://github.com/Polymer/ShadowDOM/commit/e83c09e))
- Allow dispatching the same event multiple times ([commit](https://github.com/Polymer/ShadowDOM/commit/abfa4bf))
- Merge pull request #265 from labriola/patch-1 ([commit](https://github.com/Polymer/ShadowDOM/commit/5bb221b))
- Inverted hasChildNodes() logic to ensure that the existance of a firstChild means there are childNodes. Added test to verify hasChildNodes() change with formatting per guidelines. ([commit](https://github.com/Polymer/ShadowDOM/commit/895860f))

#### TemplateBinding
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/TemplateBinding/commit/8242f08))
- test: use custom chrome launcher branch to enable harmony ([commit](https://github.com/Polymer/TemplateBinding/commit/7bb4a4b))

#### WeakMap

#### labs
- contacts-v2: close the overlay when resizing to narrow ([commit](https://github.com/Polymer/labs/commit/0481e72))
- bind order testing ([commit](https://github.com/Polymer/labs/commit/47a7356))
- native imports testing ([commit](https://github.com/Polymer/labs/commit/6734bf5))
- lightdom binding test ([commit](https://github.com/Polymer/labs/commit/188c616))
- contacts-v2: hide toolbar in contact details if tablet ([commit](https://github.com/Polymer/labs/commit/e1dff79))
- contacts-v2: responsive contact list ([commit](https://github.com/Polymer/labs/commit/22a54e8))
- contacts-v2: sidebar (no transitions) ([commit](https://github.com/Polymer/labs/commit/697d8d0))
- panel tuning ([commit](https://github.com/Polymer/labs/commit/159e8e7))
- works in x-browsers ([commit](https://github.com/Polymer/labs/commit/42a4f52))
- panel experiment ([commit](https://github.com/Polymer/labs/commit/d05a187))

#### more-elements

#### observe-js
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/observe-js/commit/5c09032))
- test: use custom chrome launcher branch to enable harmony ([commit](https://github.com/Polymer/observe-js/commit/968cf97))
- Added some perf TODOs ([commit](https://github.com/Polymer/observe-js/commit/2a69294))

#### platform
- must set forceCollectObservers before inclusion by platform.js ([commit](https://github.com/Polymer/platform/commit/8ae7e17))
- fix test when running under O.o ([commit](https://github.com/Polymer/platform/commit/a396e26))
- Work around sourcemap issues with use of banner option ([commit](https://github.com/Polymer/platform/commit/ed895df))
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/platform/commit/bf5d775))
- test: use custom chrome launcher branch to enable harmony ([commit](https://github.com/Polymer/platform/commit/03e4d23))
- max 1 flush per microtask. ([commit](https://github.com/Polymer/platform/commit/8f2dcf4))

#### polymer
- Bump version for release v0.0.20131010 ([commit](https://github.com/Polymer/polymer/commit/fe2ba2c))
- Work around sourcemap issues with banner option ([commit](https://github.com/Polymer/polymer/commit/ae39b82))
- add preventDispose property to prevent element unbinding when remove from document. Fixes #312 ([commit](https://github.com/Polymer/polymer/commit/7d26453))
- Add WeakMap to audit log ([commit](https://github.com/Polymer/polymer/commit/594e7b2))
- don't add empty string name to publish block; fixes #313 ([commit](https://github.com/Polymer/polymer/commit/5d63747))
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/polymer/commit/6e09dc9))
- test: use custom chrome launcher branch to enable harmony ([commit](https://github.com/Polymer/polymer/commit/dff3e29))
- provide the mutation records to onMutation listeners ([commit](https://github.com/Polymer/polymer/commit/7d11c03))
- flush when polymer sees an event. ([commit](https://github.com/Polymer/polymer/commit/7f1206a))

#### polymer-elements
- bump to v0.0.20131010 ([commit](https://github.com/Polymer/polymer-elements/commit/4dc3e12))
- polymer-animation: update timing param names ([commit](https://github.com/Polymer/polymer-elements/commit/7054cd2))
- give polymer-grid ability to auto-marshal `nodes` (via `auto` property) ([commit](https://github.com/Polymer/polymer-elements/commit/3f3ed10))
- polymer-flex-panel: set isContainer on the prototype instead of as the attribute so it won't show up in the markup ([commit](https://github.com/Polymer/polymer-elements/commit/3b49bab))
- make tests using tools repo ([commit](https://github.com/Polymer/polymer-elements/commit/0c6a855))
- enteredDocument -> enteredView; leftDocument -> leftView ([commit](https://github.com/Polymer/polymer-elements/commit/4e005e0))
- bump bower version ([commit](https://github.com/Polymer/polymer-elements/commit/532c899))

#### polymer-expressions
- test: only launch canary with flags on mac ([commit](https://github.com/Polymer/polymer-expressions/commit/75858bd))
- test: use custom chrome launcher branch to enable harmony ([commit](https://github.com/Polymer/polymer-expressions/commit/b110f42))

#### polymer-ui-elements
- bump to v0.0.20131010 ([commit](https://github.com/Polymer/polymer-ui-elements/commit/cbcf44e))
- Merge pull request #23 from morethanreal/master ([commit](https://github.com/Polymer/polymer-ui-elements/commit/08df3d8))
- polymer-ui-animated-pages: polymer-ui-pages with transitions ([commit](https://github.com/Polymer/polymer-ui-elements/commit/97d91b3))
- polymer-ui-toolbar: import icon-button in metadata ([commit](https://github.com/Polymer/polymer-ui-elements/commit/8dc927e))
- separate `activeTheme` and `theme` concepts from theme-aware controls, so that an inherited theme is not expressed as an attribute ([commit](https://github.com/Polymer/polymer-ui-elements/commit/f880291))
- more basic-app WIP files ([commit](https://github.com/Polymer/polymer-ui-elements/commit/f9f66ab))
- polymer-ui-toolbar: fix CSS selector for nested ui-toolbar ([commit](https://github.com/Polymer/polymer-ui-elements/commit/1ae40ea))
- polymer-ui-basic-app: add "hideMenuButton" for hiding the default menu button; add basic-app3 ([commit](https://github.com/Polymer/polymer-ui-elements/commit/9436718))
- enteredDocument -> enteredView ([commit](https://github.com/Polymer/polymer-ui-elements/commit/b2ade5a))
- don't need ui-menu inside ui-sidebar-menu ([commit](https://github.com/Polymer/polymer-ui-elements/commit/8cc74d9))
- use noscript ([commit](https://github.com/Polymer/polymer-ui-elements/commit/5495c01))
- bump bower version ([commit](https://github.com/Polymer/polymer-ui-elements/commit/68cec99))

#### projects
- pica: remove pi-toolbar ([commit](https://github.com/Polymer/projects/commit/10b73d6))
- pica: replace g-panels with polymer-ui-pages ([commit](https://github.com/Polymer/projects/commit/c740526))
- pica: use polymer-ui-basic-app ([commit](https://github.com/Polymer/projects/commit/2c9c720))
- pica: adjust toolbar styles; make explore works ([commit](https://github.com/Polymer/projects/commit/d73aa62))

#### todomvc

#### toolkit-ui

#### tools
- test: use alternate node .tmp directory ([commit](https://github.com/Polymer/tools/commit/a555c1c))
- test: install karma-chrome-launcher with git:// ([commit](https://github.com/Polymer/tools/commit/7e88dc1))
- Add AUTHORS, LICENSE, and CONTRIBUTING.md ([commit](https://github.com/Polymer/tools/commit/2fb8348))
- script to launch firefox in ie vm ([commit](https://github.com/Polymer/tools/commit/6cf0032))
- grunt task to install karma-chrome-launcher fork ([commit](https://github.com/Polymer/tools/commit/e791dca))
- test: enable experimental web platform features for canary ([commit](https://github.com/Polymer/tools/commit/39a5093))
- Allow unversioned builds in release zip ([commit](https://github.com/Polymer/tools/commit/d573bb4))
- test: disable windows/firefox testing, add chrome+experimental web ([commit](https://github.com/Polymer/tools/commit/25c0f99))

