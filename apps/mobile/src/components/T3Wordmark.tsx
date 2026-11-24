import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";

const ThemedPath = withUniwind(Path);

export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  const aspectRatio = 95 / 56;
  return (
    <Svg
      accessibilityLabel="T4"
      height={props.height}
      width={props.height * aspectRatio}
      viewBox="15.5309 37 95 56"
    >
      <ThemedPath
        d="M33.4509 93V47.56H15.5309V37H64.3309V47.56H46.4109V93H33.4509ZM90 93V79.56H64.5V70.2L89.2 37H102.96V69H110.5V79.56H102.96V93H90ZM77.5 69H90V52.5L77.5 69Z"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  );
}
