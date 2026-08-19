export function Icon({ name, variant = 'outline', size = 20, style, ...rest }) {
  const src = `https://cdn.jsdelivr.net/npm/heroicons@2.1.5/24/${variant}/${name}.svg`;
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt=""
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...rest}
    />
  );
}
