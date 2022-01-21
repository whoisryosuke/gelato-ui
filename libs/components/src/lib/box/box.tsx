import {
  LayoutUtilityStyles,
  layoutUtilityStyles,
} from '../utility-styles/utility-styles.css';

export type BoxProps = LayoutUtilityStyles & {
  m?: LayoutUtilityStyles['margin'];
  mt?: LayoutUtilityStyles['marginTop'];
  mr?: LayoutUtilityStyles['marginRight'];
  mb?: LayoutUtilityStyles['marginBottom'];
  ml?: LayoutUtilityStyles['marginLeft'];
  mx?: LayoutUtilityStyles['marginX'];
  my?: LayoutUtilityStyles['marginY'];
  p?: LayoutUtilityStyles['padding'];
  pt?: LayoutUtilityStyles['paddingTop'];
  pr?: LayoutUtilityStyles['paddingRight'];
  pb?: LayoutUtilityStyles['paddingBottom'];
  pl?: LayoutUtilityStyles['paddingLeft'];
  px?: LayoutUtilityStyles['paddingX'];
  py?: LayoutUtilityStyles['paddingY'];
};

export function Box({
  margin,
  m,
  marginTop,
  mt,
  marginRight,
  mr,
  marginBottom,
  mb,
  marginLeft,
  ml,
  marginX,
  mx,
  marginY,
  my,
  padding,
  p,
  paddingTop,
  pt,
  paddingRight,
  pr,
  paddingBottom,
  pb,
  paddingLeft,
  pl,
  paddingX,
  px,
  paddingY,
  py,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height,
  placeItems,
}: BoxProps) {
  const utilityProps: LayoutUtilityStyles = {
    margin: m ?? margin,
    marginTop: mt ?? marginTop,
    marginRight: mr ?? marginRight,
    marginBottom: mb ?? marginBottom,
    marginLeft: ml ?? marginLeft,
    marginX: mx ?? marginX,
    marginY: my ?? marginY,
    padding: p ?? padding,
    paddingTop: pt ?? paddingTop,
    paddingRight: pr ?? paddingRight,
    paddingBottom: pb ?? paddingBottom,
    paddingLeft: pl ?? paddingLeft,
    paddingX: px ?? paddingX,
    paddingY: py ?? paddingY,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    width,
    height,
    placeItems,
  };
  return (
    <div className={layoutUtilityStyles(utilityProps)}>
      <h1>Welcome to Box!</h1>
    </div>
  );
}

export default Box;
