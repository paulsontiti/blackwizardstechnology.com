import { Skeleton } from "@mui/material";

type LoadingTextProps = {
  text: string | undefined;
  component: any;
  width?: number;
  height?: number;
};
export function LoadingText({
  text,
  component,
  width,
  height,
}: LoadingTextProps) {
  if (!text) return <Skeleton animation="wave" width={width} height={height} />;
  return component;
}
export function LoadingTextRectangular({
  text,
  component,
  width,
  height,
}: LoadingTextProps) {
  if (!text)
    return (
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={200}
        height={100}
      />
    );
  return component;
}
