function RelatedPosts() {
  const posts = [
    { href: "#", title: "Como escrever um HTML limpo" },
    { href: "#", title: "Melhores práticas em CSS" },
    { href: "#", title: "Acessibilidade na web" },
  ];

  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={post.href}>{post.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default RelatedPosts;
