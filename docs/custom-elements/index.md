---
sidebar_position: 1
sidebar_label: Custom elements
sidebar_class_name: green
---

# Custom elements
import { Highlight } from "@site/components/Highlight/Highlight.tsx"
import Button from "@site/components/Button"


<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

### Implementation
```
import { Highlight } from "@site/components/Highlight/Highlight.tsx"


<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
```

<Button text="I'm stolen from UIComponents" />


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>