title: Agenda

* O infinito está próximo
	* Reta
    * Formas geométricas
	* Círculo
* Viagem no Tempo
* Contruindo um Jogo

---

title: Objetivo

* Pensar
* Conjecturar
* "O que vou ser quando crescer?"
* Um pouco sobre o Curso de Ciência da Computação

---

class: dark quote nobackground
content_class: flexbox vleft

<p class="big text-center">
	O infinito está próximo
</p>

---

title: Segmento de Reta - Finito ou Infinito?

Imagine um segmento de reta real com tamanho de **1m**.

Imagine que nosso amigo deve chegar ao final da reta saltando sempre
na metade do que falta.

<object class="center" data="img/reta-1.svg" width="100%" type="image/svg+xml"></object>

---

title: Segmento de Reta - Finito ou Infinito?

Inicialmente, teremos 2 segmentos de reta com tamanho **0,5m**.

<object class="center" data="img/reta-2.svg" width="100%" type="image/svg+xml"></object>

---

title: Segmento de Reta - Finito ou Infinito?

Dividindo outra vez na metade teremos segmentos de tamanho **0,25m**.

<object class="center" data="img/reta-3.svg" width="100%" type="image/svg+xml"></object>

---

title: Segmento de Reta - Finito ou Infinito?

<object class="center" data="img/reta-4.svg" width="100%" type="image/svg+xml"></object>

---

title: Segmento de Reta - Finito ou Infinito?

<object class="center" data="img/reta-5.svg" width="100%" type="image/svg+xml"></object>

---

title: Segmento de Reta - Finito ou Infinito?

<object class="center" data="img/reta-6.svg" width="100%" type="image/svg+xml"></object>

<p class="big text-center">
	Continuando assim, quando nosso amigo chegará ao final?
</p>

---

title: Formas Geométricas
class: segue nobackground fill
image: img/shapes-1.jpg

---

title: Formas Geométricas

O número mínimo de segmentos de reta que formam um polígono é 3.

Chamamos um polígono de **3** lados de triângulo.

<object class="center" data="img/poligono-1.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas

Chamamos um polígono de **4** lados de quadrado.

<object class="center" data="img/poligono-2.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas

Dessa forma podemos continuar a aumentar o número de lados (**5**).

<object class="center" data="img/poligono-3.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas

Dessa forma podemos continuar a aumentar o número de lados (**6**).

<object class="center" data="img/poligono-4.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas

Dessa forma podemos continuar a aumentar o número de lados (**8**).

<object class="center" data="img/poligono-5.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas

Dessa forma podemos continuar a aumentar o número de lados (**12**).

<object class="center" data="img/poligono-6.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas

Dessa forma podemos continuar a aumentar o número de lados (**20**).

<object class="center" data="img/poligono-7.svg" width="100%" type="image/svg+xml"></object>

---

title: Formas Geométricas
class: dark quote nobackground
content_class: flexbox vleft

<p class="big text-center">
	E se colocarmos infinitos lados?
</p>

---

title: Formas Geométricas

Teremos um círculo, um polígono com infinitos lados.

<object class="center" data="img/poligono-8.svg" width="100%" type="image/svg+xml"></object>

---

title: Círculo
class: segue nobackground fill
image: img/circle-1.jpg

---

title: Círculo
content_class: text-center

Sabemos que o comprimento do círculo é dado por:

$C = 2 \cdot r \cdot \pi$

<p class="big">
OK, mas de onde vem o $\pi$?
</p>

---

title: Círculo

Seja um círculo de **40,5 cm** de comprimento.

Isso quer dizer que ele possui **12,89 cm** de diâmetro,
ou **6,445 cm** de raio.

<object class="center" data="img/circulo-1.svg" width="100%" type="image/svg+xml"></object>

---

title: Círculo

Ao dividirmos $40,5 \div 12,89 = 3,14197 $

<object class="center" data="img/circulo-1.svg" width="100%" type="image/svg+xml"></object>

---

title: Área do Círculo
content_class: text-center

Temos o comprimento

$C = 2 \cdot r \cdot \pi$.

E de onde vem a fórmula da Área?

$A = \pi r^2$

---

title: Integral
content_class: text-center

<p class="big">
$\int x \cdot dx$
</p>

Usada para somar todos os valores de uma função em $R$

---

title: Integral
content_class: text-center

Integral de uma constante $k$

<p class="big">
$\int_a^b k \cdot dx = k \cdot x /_a^b = k \cdot b - (k \cdot a)$
</p>

Exemplo:

<p class="big">
$\int_0^4 2 \cdot dx = 2 \cdot x /_0^4 = 2 \cdot 4 - (2 \cdot 0) = 8$
</p>

---

title: Integral

Vejamos isso graficamente:

<object class="center" data="img/integral-1.svg" width="100%" type="image/svg+xml"></object>

Nota-se que dá exatamente a área de um retângulo.

---

title: Integral
content_class: text-center

Integral de uma variável $x^n$

<p class="big">
$\int_a^b x^n \cdot dx = \frac{x^{n + 1}}{n + 1} /_a^b
= \frac{b^{n + 1}}{n + 1} - (\frac{a^{n + 1}}{n + 1})$
</p>

Exemplo:

<p class="big">
$\int_0^4 x \cdot dx = \frac{x^2}{2} /_0^4 = \frac{4^2}{2} - (\frac{0^2}{2}) = 8$
</p>

---

title: Integral

Vejamos isso graficamente:

<object class="center" data="img/integral-2.svg" width="100%" type="image/svg+xml"></object>

Nota-se que dá exatamente a área de um triângulo.

---

title: Área do Círculo
content_class: text-center

Agora que já temos a ideia de integral podemos calcular a área do círculo.

<p class="big">
$A = \int_0^r 2 \cdot \pi \cdot r \cdot dr$
</p>

<p class="big">
$2 \pi \frac{r^2}{2} /_0^r = 2 \pi \frac{r^2}{2} - (\frac{0^2}{2})$
</p>

<p class="big">
$A = \pi \cdot r^2 $
</p>

---

title: Área do Círculo

Imagine que estamos somando círculos de todos os tamanhos até chegar o maior:

<object class="center" data="img/integral-3.svg" width="100%" type="image/svg+xml"></object>

<!-- Mostrar como saber o volume da esfera -->

---

title: Conclusões sobre o Infinito
class: segue nobackground fill
image: img/universe-1.jpg

---

title: Viagem no tempo<br/>É possível?
class: segue nobackground fill
image: img/time-machine-1.jpg

---

title: Viagem no tempo
content_class: text-center

<p class="big">
Sim, mas somente para o Futuro!
</p>

Nada de Exterminador do Futuro, ou De Volta para o Futuro,
ou Planeta do Macacos (exceto no filme 1).

---

title: Viagem no tempo

Sinopse Planeta dos Macacos (1968)

> Uma espaçonave comandado pelo Coronel Taylor, decolou da Terra em 1972 e viajou
> 700 anos no futuro devido a viajarem mais rápido que a velocidade da luz por um
> buraco de minhoca (wormhole).

<footer class="source">Fonte:
<a href="http://www.imdb.com/title/tt0063442/synopsis?ref_=ttpl_pl_syn">
	www.imdb.com/title/tt0063442/synopsis?ref_=ttpl_pl_syn
</a>
</footer>

---

title: Teoria da Relatividade
content_class: text-center

<p class="big">
$E = m \cdot c^2$
</p>

<p class="big">
A quantidade de Energia ($E$) é equivalente a quantidade de massa ($m$)
vezes a velocidade da luz ($c$) ao quadrado.
</p>

---

title: Viagem no tempo

Experiência para comprovar a Teoria da Relatividade:

Em Outubro de 1971, um físico e um astrônomo levaram relógios atômicos
a bordo de um avião comercial. Eles voaram 2 vezes ao redor do mundo, primeiro
para o leste depois para o oeste, e compararam com os relógios que ficaram no
Observatório Naval do EUA.

Ao comparar as horas nos relógios perceberam que havia uma diferença. Os relógios
que estavam com eles no avião tinham a hora mais atrasada, ou seja, se passou menos
tempo relativamente aos que estavam parados na Terra.

---

title: Relógio Atômico
class: nobackground fill
image: img/atomic-clock.jpg

<footer class="source red">One of the actual HP 5061A Cesium Beam atomic clock units used in the Hafele–Keating experiment</footer>

---

title: Contruindo um Jogo
class: segue nobackground fill
image: img/making-game-1.png

---

title: Contruindo um Jogo

Em um jogo podemos encontrar elementas da

* Física
	* Movimentação
    * Ação e Reação
* Biologia
	* Inteligência Artificial
    * Movimentação
    * Esqueleto

---

title: Contruindo um Jogo

Movimentação personagem 2D.

<p><img alt="movimentação" src="img/p1_spritesheet.png" style="width: 70%" class="center" /></p>

---

title: Angry Birds Clone
class: segue nobackground fill
image: img/angry-birds-clone.png

---

title: Contruindo um Jogo

Em um jogo podemos encontrar elementas da

* Geografia
	* Mapas
    * Clima
* História
	* Narrativa
    * Passado do personagem
    * Possível futuro do personagem
    * Jogos baseados em histórias reais

---

title: Tiled
class: segue nobackground fill
image: img/tiled-1.png

---

title: Enemy Territory
class: segue nobackground fill
image: img/enemy-territory-1.jpg

---

title: Contruindo um Jogo

Em um jogo podemos encontrar elementas da

* Matemática
	* Matrizes
    * Funções
    * Inteligência Artificial

---

title: Bomberman 5
class: segue nobackground fill
image: img/bomberman-5.jpg

---

title: Elemental One
class: segue nobackground fill
image: img/elemental-one-1.png


<!--- Ideias:
Tópico 1:
- Iniciar mostrando uma reta, é infinita?
- Divida a reta ao meio, faça isso várias vezes, quantas vezes é possível?
------
Formas geométricas
Triangulo
Quadrado
5 lados
6 lados
10 lados
20 lados
Infinitos lados, círculo
------
\pi
circunferência
integral
área
------
Infinito macro e micro
------
Tópico 2:
- é possível?
- E = mc^2
- relógio atômico
- planeta dos macacos
------
Tópico 3:
- Física
	- Movimentação
    - Ação e reação
    - 
- IA
- Matrix
-->
