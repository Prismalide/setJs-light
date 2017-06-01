# setJs-light  

    Passer des paramètres à un fichier javascripte.

Actuellement en version `Alpha`  
La dernière version fonctionnelle est ici : [lib/setJs-light.js](lib/setJs-light.js)  
Sous licence BSD 2 modifiée avec 3 ajouts:
```
* 1) Pour toute modification de ce projet, vous devez respecter la compatibilité
  ascendante avec ses dernières spécifications officielles à la date de sa
  première utilisation dans votre projet ou demander une autorisation écrite
  préalable spécifique.

* Dans vos sources : 
  - 2) Vous devez conserver le nom de la fonction principale "setJs-light".
    Mais vous pouvez créer un alias.
  - 3) Vous devez conserver la ligne de commentaire précédant la déclaration de la
    fonction principale "setJs-light".
```

## light?
Un code source en version light est très court.  
Il a pour vocation à être copié et utilisé tel-quel dans un autre code source.  
Il représente souvent une version simplifiée d'un autre projet.  


### Projet  
Passer des paramètres à la manière d'une commande ligne d'un programme.  
Passer des paramètres par l'URL de la page html ou l'URL de la balise script.   
Les paramètres sont du type flag (nomDuFlag) ou string (nomData:Value).  
Si besoin, il est possible d’effectuer un traitement pour un ou plusieurs paramètres.  

### notes  
Pour exemple vous trouverez une utilisation de setJs-light dans le projet [DOMid2js](<https://github.com/Prismalide/DOMid2js>)  
L'abréviation du nom est **stjl**  
### use  
Bientôt: Pour plus d'infos et démos récupérer le projet (zip) et exécuter `setJs-light-use.html` dans le répertoire `use`   
```javascript
Dans votre code javascrip:  
  settings = setJs( "yourScriptName.js", "idName", settingOptions )  
  ///  declare options (basic) \\\
  settingOptions = {  
    /// flag options \\\
    flags:{
      optName1:true,
      //...,
      optNamen:true
      }
    /// value option \\\
    values:{
      optValName1:true,
      //...,
      optValName1:true
      }
    }
Note: le nom des options est totalements libre. 
Pour intéroger les options:
  if ( settings.optNameX... )  {...}
Pour récupérer une option:
  var varName = settings.optValNameX
```
