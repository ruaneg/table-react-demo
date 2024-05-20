import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import { IconContainer } from "../Icons/Icons.styles";

const StyledDownloadButton = styled.button`
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: 0px;
  font-size: 1rem;
  color: #000000d6;
  cursor: pointer;
  &:active {
    color: dodgerblue;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;

const DownloadButton = ({
  handleOnClick,
  disabled,
  label,
  ...rest
}: {
  handleOnClick: () => void;
  disabled: boolean;
  label: string;
}) => {
  return (
    <StyledDownloadButton
      aria-label={"Download Selected files"}
      onClick={handleOnClick}
      disabled={disabled}
      {...rest}
    >
      <IconContainer>
        <FaDownload />
      </IconContainer>
      {label}
    </StyledDownloadButton>
  );
};

export default DownloadButton;
