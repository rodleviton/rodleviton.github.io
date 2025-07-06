import { Icon } from "./icon";

const Component = ({
  width = 24,
  height = 24,
  ...props
}: React.ComponentProps<typeof Icon>) => {
  return (
    <Icon viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        d="M1.64246 0.1875L3.52777 21.3531L11.9874 23.7118L20.4706 21.3444L22.3575 0.1875H1.64246ZM18.4408 5.03662L17.8132 12.0876L17.8151 12.1256L17.8125 12.2132V12.2124L17.3666 17.1426L17.3175 17.5806L12 19.0513L11.9958 19.0551L6.68752 17.5761L6.32808 13.5H8.93114L9.11583 15.5726L12.0007 16.3545L12 16.356V16.3556L14.8955 15.5627L15.2015 12.1875H9.14846L9.09652 11.6169L8.97821 10.2802L8.91614 9.5625H15.4316L15.6686 6.9375H5.74496L5.69302 6.36731L5.57489 5.03025L5.51264 4.3125H18.5028L18.4408 5.03662Z"
        fill="currentColor"
      />
    </Icon>
  );
};

Component.displayName = "Css3Icon";

export const Css3Icon = Component;
