export const template = (
  { template }: any,
  _opts: any,
  { imports: _imports, componentName, props: _props, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ["typescript"] });

  return tsTemplate.ast`
      import * as React from "react";
      import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";

      interface Props extends SvgProps {
        size?: NumberProp;
      }

      const ${componentName} = ({ size = 24, ...props }: Props) => {
        return (
          ${jsx}
        )
      };

      ${exports}
    `;
};

export default template;
