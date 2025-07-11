import { Icon } from "./icon";

const Component = ({
  width = 24,
  height = 24,
  ...props
}: React.ComponentProps<typeof Icon>) => {
  return (
    <Icon viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        d="M1.69348 0.375L3.56942 21.3924L11.9874 23.7176L20.4287 21.3951L22.3065 0.375H1.69348ZM18.4046 5.35106L18.287 6.69581L18.2353 7.3125H8.36061L8.59629 9.9375H18.0005L17.9375 10.5883L17.3314 17.3606L17.2867 17.7862L12 19.2392V19.2396L11.9936 19.2429L6.71042 17.8511L6.35173 13.875H8.94204L9.12561 15.9223L11.9919 16.6875H12V16.5851L14.879 15.8586L15.1798 12.5625H6.23642L5.60211 5.41556L5.54042 4.6875H18.4665L18.4046 5.35106Z"
        fill="currentColor"
      />
    </Icon>
  );
};

Component.displayName = "Html5Icon";

export const Html5Icon = Component;
