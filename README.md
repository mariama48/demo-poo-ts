# La programmation Orienté Objet en TS

La programmation orienté objet (POO) est une façon de développer.

## Les classes 

Les classes sont des "moule", des modéles pour créer des objets.

Elle permettent d'indiquer qu'un objet peut avoir des propriétés (attributs) et des fonctions (méthodes).

## Objets

Les Objets sont une espèce de super variable avec leurs propres variables (attributs) et leurs propres fonction (méthodes).

### La visibilité

Les méthodes et attributs de l'objet ont une visibilitée:

- `public`
- `private`
- `protected`

Cette visibilité défini si l'accès à une méthode ou un attribut est possible en dehors de la classe ou il ou elle est déclaré.

private: Accessible à l'intérieur de la classe **uniquement**.
protected: concerne principalement l'héritage. L'attribut ou la méthode est visible dans la classe et pour les enfants de la classe. Mais pas en dehors.
public: visible partout, en dehors de la classe comme à l'intérieur.

### Attributs et méthodes static

Le mot clé static attache un attribut ou une méthode directement à la classe (et non à l'objet de la classe). Il n'y a donc pas besoin d'instancier un objet pour utiliser une méthode static. Les attribut static sont aussi accéssible sans instance d'objet et permettent par exemple de partager une variable entre toutes les instance de la classe.

## Les principes de l'orienté Objet

### Encapsulation

L'encapsulation est le fait d'enfouir la logique d'une partie du code.

Par exemple: Le calcul des intérets d'un compte en banque ne concerne que l'objet compte. Par conséquent la logique qui calcule les intérets serait dans la classe Compte (et pas forcément accéssible en dehors de la classe).

### Héritage

Coming soon&trade;

### Polymorphisme

Coming soon&trade;