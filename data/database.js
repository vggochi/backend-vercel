let categorias = [
    { id:1, nome: "Temaki" },
    { id:2, nome: "Combinados" },
    { id:3, nome: "Bebidas" },
    { id:4, nome: "Sobremesas" }
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Temaki Completo",
        descricao: "Temaki com slmão, atum, kani, cream cheese e cebolinha.",
        preco: 35.50,
        imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/12/20095333/Temaki-de-salmao-1.webp"
    },
    {
        categoriaId: 2,
        nome: "Combinado de Sushi",
        descricao: "Combinado com 20 peças de sushi variados.",
        preco: 85.00,
        imagem: "https://kingtemaki.com.br/lojas/wp-content/uploads/2020/03/combinados.jpg"
    },
    {
        categoriaId: 3,
        nome: "Coca-Cola Lata",
        descricao: "Lata de refrigerante de 350ml.",
        preco: 7.50,
        imagem: "https://conteudo.imguol.com.br/c/entretenimento/ee/2023/02/13/refrigerante-com-limao-1676325630752_v2_450x450.jpg"
    },
    {
        categoriaId: 4,
        nome: "Mochi de Morango",
        descricao: "Sobremesa japonesa à base de arroz e recheio de morango.",
        preco: 12.00,
        imagem: "https://receitaki.com.br/imagens/receitas/487/receita-de-mochi-de-morango-como-fazer.webp"
    }
];

module.exports = { categorias, produtos };