# Calculadora Simples
Este é o projeto de uma **calculadora simples**, na qual é possível fazer a 5 (cinco) operações básicas:
1. Soma;
2. Subtração;
3. Multiplicação;
4. Divisão;
5. Porcentagem;
6. Modularização.

A calculadora ***não*** guarda o histórico das operações realizadas e seus respectivos resultados.

O projeto foi desenvolvido utilizando **JavaScript**, **React.js** e **React Native**.

A calculadora foi estilizada utilizando a biblioteca ***Styled Components*** (CSS-in-JS), do React.js e do React Native, e utilizando elementos visuais da biblioteca ***Material-UI***, do React.js.

## Como os números foram renderizados
1. Defini uma matriz chamada ***```buttons```***, que contém os botoões numéricos e operações. Cada linha da matriz representa uma linha de botões da calculadora.
2. Percorri cada linha da matriz e, dentro de cada linha, percorremos os botões individualmente.
3. Utilizei a função ***```map```*** para iterar sobre cada linha da matriz **```buttons```**, o que nos possibilita acessar os botões de cada linha individualmente.
4. Dentro do mapeamento dos botões, adicionei condições para verificar o tipo de botão. Se for um botão numérico, renderizamos um componente ***```<Btn>```*** com o texto do número. Se for uma operação ou outro tipo de botão, renderizamos o componente correspondente, como ***```<BtnOperation>```***, ***```<BtnClean>```***, ***```<OthersBtn>```***, etc.
5. Em cada componente de botão, defini a chave ***```key```*** como o ***índice do botão no mapeamento***, visando garantir a identificação única de cada elemento renderizado.

## Linguagens utilizadas
* JavaScript;
* React.js;
* React Native.

## Bibliotecas utilizadas
* [Styled Components](https://styled-components.com/) (React.js & React Native);
* [Vector Icons](https://github.com/oblador/react-native-vector-icons) (React Native);
* [React Native Paper](https://callstack.github.io/react-native-paper/) (React Native).

## Imagens e vídeos

## Configuração do emulador usado
> Foi utilizado o **Android Studio**!
* Phone Pixel 6 Pro;
* Density: 560dpi;
* PlayStore: (no checked);
* System image:
    + Release name: Q;
    + API Level: 29;
    + ABI: x86 (x86 Images);
    + Target: Android 11.0 (Google APIs)
