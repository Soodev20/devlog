const Meta = (title: string) => {
  return (
    <>
      <title>{title}</title>
      <meta
        name='soodev20'
        content='blog, react, next, frontend'
      />
    </>
  );
};

export default Meta;

Meta.defaultProps = {
  title: `Sooj's Devlog`,
};