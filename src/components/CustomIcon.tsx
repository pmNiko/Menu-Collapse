import { Icon } from "@material-ui/core";

interface Props {
  iconName?: string;
  iconFontSize?: number;
  iconColor?: string;
}

export const CustomIcon = ({
  iconName,
  iconFontSize = 32,
  iconColor,
}: Props) => {
  if (!iconName) return null;

  return (
    <Icon
      style={{
        fontSize: iconFontSize,
        color: iconColor,
        height: "auto",
      }}
      className={`material-icons`}
    >
      {iconName}
    </Icon>
  );
};
