import styles from "./Skeleton.module.css";

type SkeletonProps = {
  height?: string;
  width?: string;
  aspectRatio?: string;
  margin?: string;
};

/**
 * Rectangle with Loading animation to create a Skeleton
 */
export function Skeleton(props: SkeletonProps) {
  return (
    <div
      className={styles.skeleton}
      style={{
        aspectRatio: props.aspectRatio,
        height: props.height,
        width: props.width,
        margin: props.margin,
      }}
    ></div>
  );
}
