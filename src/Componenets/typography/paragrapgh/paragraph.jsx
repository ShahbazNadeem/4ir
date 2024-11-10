export default function Para({
  paragraph,
  Left,
  Delay,
  Duration,
  className,
  paragraph2,
  breakpoint,
  style,
  iconadd,
}) {
  return (
    <>
      <p
        data-aos={Left}
        data-aos-delay={Delay}
        data-aos-duration={Duration}
        className={className}
        style={style}
      >
        {iconadd ? <i class="ri-subtract-line"></i> : null}
        {paragraph}{" "}
        {breakpoint ? (
          <>
            <br />
            <br />
            {paragraph2}
          </>
        ) : null}{" "}
      </p>
    </>
  );
}
