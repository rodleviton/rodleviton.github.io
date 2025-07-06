import { Icon } from "./icon";

const Component = ({
  width = 24,
  height = 24,
  ...props
}: React.ComponentProps<typeof Icon>) => {
  return (
    <Icon viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        d="M14.4004 9.59961H24V14.4004H14.4004V24H9.59961V14.4004H0V9.59961H9.59961V0H14.4004V9.59961Z"
        fill="currentColor"
      />
    </Icon>
  );
};

Component.displayName = "PlusIcon";

export const PlusIcon = Component;
