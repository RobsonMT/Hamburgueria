context("Submit CEP number and display returned values", () => {
  it("Show if the application interactions are, all functional", () => {
    cy.visit(
      "https://hamburgueria-2-0-com-typescript-json-robsonmt.vercel.app/"
    );
    cy.viewport(1440, 900);

    // Redirecionando para página de cadastro
    cy.get(".css-1dpjdq0").click();
    cy.get(".css-1dkibi0").click();

    // Criando um usuário
    cy.get("#field-3").click().type("JhonDoe");
    cy.get("#field-4").click().type("JhonDoe@mail.com");
    cy.get("#field-5").click().type("JhonDoe00*");
    cy.get("#field-6").click().type("JhonDoe00*");
    cy.get(".chakra-button").click();

    //Se já tiver conta clicar para fazer login
    cy.get("a > .chakra-text").click();

    // Logando
    cy.get("#field-7").click().type("JhonDoe@mail.com");
    cy.get("#field-8").click().type("JhonDoe00*");
    cy.get(".css-1dpjdq0").click();

    //dashboard
    cy.get(":nth-child(25) > .css-7n2172 > .chakra-image").scrollIntoView();
    cy.get(".css-1blfrxz").scrollIntoView();

    //Pesquisando por bebidas
    cy.get("#field-9").click().type("bebidas");
    cy.get(".chakra-input__right-element").click();
    cy.get(
      ":nth-child(1) > .css-69cy0d > .chakra-stack > .chakra-button"
    ).trigger("mouseover");

    //adicionando ao carrinho
    cy.get(
      ":nth-child(1) > .css-69cy0d > .chakra-stack > .chakra-button"
    ).click();

    //Pesquisando por sobremesa
    cy.get("#field-9").click().type("sobremesa");
    cy.get(".chakra-input__right-element").click();
    cy.get(":nth-child(10) > .css-7n2172 > .chakra-image").scrollIntoView();
    cy.get(
      ":nth-child(10) > .css-69cy0d > .chakra-stack > .chakra-button"
    ).trigger("mouseover");

    //adicionando ao carrinho
    cy.get(
      ":nth-child(10) > .css-69cy0d > .chakra-stack > .chakra-button"
    ).click();

    //Pesquisando por picanha
    cy.get(".css-1blfrxz").scrollIntoView();
    cy.get("#field-9").click().type("picanha");
    cy.get(".chakra-input__right-element").click();
    cy.get(
      ":nth-child(2) > .css-69cy0d > .chakra-stack > .chakra-button"
    ).trigger("mouseover");

    //adicionando ao carrinho
    cy.get(
      ":nth-child(2) > .css-69cy0d > .chakra-stack > .chakra-button"
    ).click();
    cy.get(".css-oiqbs0 > :nth-child(2)").click();

    cy.get(".css-1blfrxz").scrollIntoView();
    cy.get(".chakra-badge").trigger("mouseover");

    //Abrindo o modal do carrinho
    cy.get(".chakra-badge").click({ force: true });

    //Aumentando quantidade
    cy.get(
      ":nth-child(2) > .css-i5q2k0 > .css-hwr4qq > .css-o7z77f > .css-2b1f2o > svg"
    ).click();
    cy.get(
      ":nth-child(2) > .css-i5q2k0 > .css-hwr4qq > .css-o7z77f > .css-2b1f2o > svg"
    ).click();

    //Diminuindo quantidade
    cy.get(
      ":nth-child(2) > .css-i5q2k0 > .css-hwr4qq > .css-o7z77f > .css-1lh8d7s > svg"
    ).click();
    cy.get(
      ":nth-child(2) > .css-i5q2k0 > .css-hwr4qq > .css-o7z77f > .css-1lh8d7s > svg"
    ).click();
    cy.get(
      ":nth-child(2) > .css-i5q2k0 > .css-hwr4qq > .css-o7z77f > .css-1lh8d7s > svg"
    ).click();

    //Removendo item do carrinho
    cy.get(".css-a7xji8 > :nth-child(2)").click({ force: true });

    //Fechando modal
    cy.get(".chakra-modal__close-btn").click();

    //Fazendo Logout
    cy.get(":nth-child(4) > svg").click();
    cy.get(".css-1q8b5yy > .chakra-heading").click();
  });
});
