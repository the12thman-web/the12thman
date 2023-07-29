import shortcodes from "@shortcodes/all";

const Default = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="content">
        </div>
      </div>
    </section>
  );
};

export default Default;
