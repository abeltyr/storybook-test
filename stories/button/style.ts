import styled from "@emotion/styled";

interface StorybookButtonFeature {
  primary: boolean;
  size: String;
}

export const StorybookButton = styled.button<StorybookButtonFeature>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${(props) => (props.primary ? "white" : "#333")};
  background-color: ${(props) => (props.primary ? "#1ea7fd" : "transparent")};
  box-shadow: ${(props) =>
    props.primary ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
  font-size: ${(props) => {
    if (props.size === "small") return "12px";
    if (props.size === "medium") return "14px";
    if (props.size === "large") return "16px";
  }};

  padding: ${(props) => {
    if (props.size === "small") return "10px 16px";
    if (props.size === "medium") return "11px 20px";
    if (props.size === "large") return "12px 24px";
  }};
`;
