# BOND London GraphCMS Starter Template

## Quick Ref

- [Component Development Workflow](/README.md#component-development-workflow)

---

## Component Development Workflow

1. **Create a component file**. Place the file within the `/src/components` directory with the .tsx extension. If it helps, use the template for a simple, single prop component that uses the `<Section />` wrapper below.

```
import React from "react";
import { Section } from "../layouts";

export const SimpleComponent: React.FC<{
  header?: string;
}> = ({ header }) => {
  return (
    <Section componentName="Set Component Name">
      {header && <h2 className="col-span-full text-center h2">{header}</h2>}
    </Section>
  );
};
```

2. **Create a component story file**. Place the file within the `/src/stories` directory with the .stories.tsx extension. A template is for a simple component story is available below.

```
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SimpleComponent } from "../../components/SimpleComponent";

const Template: ComponentStory<typeof SimpleComponent> = (args) => (
  <SimpleComponent {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  header: "Example of a simple component",
};

const meta: ComponentMeta<typeof SimpleComponent> = {
  title: "Components/SimpleComponent",
  component: SimpleComponent,
  subcomponents: { Basic, Full },
  argTypes: {
    header: { control: { type: "text" } },
  },
};

export default meta;
```

3. **Test the component**. Use the Storybook canvas by running `yarn storybook`. Make tweaks to the design/functionality as required.

4. **Link the component to a GraphCMS model (if applicable)**. If content from the client is required, create a model on GraphCMS, along with all of its required fields. In the example of the Simple Component above this would be the `Header` field of type string.

5. **Create the GraphCMS file**. Place it within the `/src/cms` directory with a .tsx file extension. If relevant, add the GraphQL query to take the necessary information from the model created in step 4. For example:

```
export const BlockFragment = graphql`
  fragment Block on GraphCMS_Block {
    id
    title
    componentType
  }
`
```

6. **Convert CMS component to the original code component**. The idea is for the original component to recieve no CMS logic, it is simply served content in an appropriate form. Use/create GraphCMS migrations (located in `/graphcms-migrations`) as a kind of utility for converting content and keeping the respective files clean. The following is a simple example using the CMS Block to serve the SimpleComponent.

```
export const Block: React.FC<{ block: Queries.BlockFragment }> = ({
  block,
}) => {
  switch (block.type) {
    case "Heading":
      return <SimpleComponent header={block.heading.toUpperCase()} />;
  }
  return <pre>Block {block.type} not yet implemented</pre>;
};
```
