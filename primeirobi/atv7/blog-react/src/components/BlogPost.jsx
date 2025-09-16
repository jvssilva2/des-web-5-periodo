function BlogPost() {
  const content = {
    title: "Entendendo o HTML Semântico",
    date: "2025-09-15", 
    p1: "HTML Semântico é uma forma de estruturar páginas web utilizando tags que possuem significado, ou seja, que indicam claramente o papel do conteúdo que envolvem. Diferente de elementos genéricos como <div> e <span>, as tags semânticas, como <header>, <nav>, <main>, <article>, <section> e <footer>, ajudam a identificar a função de cada parte da página.",
    p2: "Isso torna o código mais compreensível para os desenvolvedores, além de melhorar a acessibilidade, permitindo que leitores de tela interpretem melhor o conteúdo, e o SEO, facilitando que mecanismos de busca compreendam e classifiquem a página com mais eficiência. Portanto, utilizar HTML semântico é uma prática essencial no desenvolvimento web.",
    imageSrc: "/html semantico.png",
    imageCaption: "Exemplo de uso de tags semânticas na estrutura de uma página HTML."
  };

  return (
    <article>
      <h2>{content.title}</h2>
      <time dateTime={content.date}>{new Date(content.date).toLocaleDateString('pt-br', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <figure>
        <img src={content.imageSrc} width="500" alt="Estrutura de um HTML Semântico" />
        <figcaption>{content.imageCaption}</figcaption>
      </figure>
    </article>
  );
}

export default BlogPost;
