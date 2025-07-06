import { Icon } from "./icon";

const Component = ({
  width = 24,
  height = 24,
  ...props
}: React.ComponentProps<typeof Icon>) => {
  return (
    <Icon viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        d="M12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C14.3713 23.9953 16.688 23.2882 18.6578 21.9679L8.81512 9.25125V16.7959H7.2V7.2H9.219L19.9299 20.997C21.2078 19.8719 22.2316 18.4878 22.9333 16.9366C23.635 15.3853 23.9987 13.7026 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0ZM15.3332 7.2H16.9333V16.3455L15.3332 14.2444V7.2ZM19.8669 21.06L19.8461 21.078C19.8531 21.072 19.86 21.066 19.8669 21.06Z"
        fill="currentColor"
      />
    </Icon>
  );
};

Component.displayName = "NextIcon";

export const NextIcon = Component;
