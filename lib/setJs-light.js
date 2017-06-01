/* setJs-light.js *//*05/2017
/* from prismalide.com, setJs-light gitHub
/* license : BSD 2 modified (3 additions)
/* version: 0.9
/* invasion javascript: global => setJslight
/* compatibility: IE>8
/* To include/edit in your code
/***/

"use strict"
try{"".a = "";console.log("setJs-light.js","not in strict mode")}catch(e){};

    //______ setJslight ____//License code: BSD 2 modified. From prismalide.com, setJs-light v.0.9 gitHub for details
    function setJslight ( fileName, id, settingOptions, stettingObject ){
    //!-reply:{}
    //!-var:
        var settingLine = []
        stettingObject = stettingObject || {}
        var settingFlags = settingOptions.flags
        var settingValues = settingOptions.values
        ///__ init __\\\
        if ( fileName.substr( fileName.length - 3, 3 ) == '.js' ){
            ///__ explore balises script for settings __\\\                            
            for ( var scripts = document.getElementsByTagName( "script" ) 
                , i = 0 ; i < scripts.length ; i++ ){
                if ( scripts[ i ].src.substr( - fileName.length ) == fileName ){
                    settingLine = scripts[ i ].title.toLowerCase( ).split( /\s\W*|:/ )
                    break
                    }
                }
            ///__ explore URL for settings __\\\                            
            { var curName = ( decodeURIComponent( ( window.location || document.location ).href ).split( "?" ).pop( ) ).split( /\s\W*|=/ )
                if ( curName[ 0 ] == id ){
                    settingLine = ( settingLine + curName.toString( ).substr( id.length+1 ) ).replace( /,/g , ' ' ).toLowerCase( ).split( /\s\W*|:/ )
                    }  
            }
        ///__ fileName is string for settings __\\\
        }else { settingLine = fileName.split( /\s\W*|:/ ) }
        ///  reset  \\\
        try{ if ( settingOptions.reset != undefined ) settingOptions.reset()
            }catch ( e) { throw  new Error ("reset error in settings") } 
        ///__ process setting __\\\
        if ( !settingFlags[id] )settingFlags[id] =  function ( ){ } //ajout: pas d'action sur "id" commande 
        if (settingLine[0] == id ){//"id" obligatoire en premier => sinon pas de paramètres
            for ( var i = 1; i<settingLine.length; i++ ){ 
                var settingValue, settingName = settingLine[ i ]
                if (  settingName == "" ) continue
                ///  autre façon de coder un switch  \\\
                if ( ( settingValue = settingFlags[ settingName ] ) == undefined ){
                        if ( settingValues[ settingName ] != undefined ) {
                            settingValue = settingLine[ i + 1 ]
                            i++     
                        }else { console.error ( fileName + ' unknown parameter: ' + settingValue ); continue } 
                    }
                if ( typeof settingValue == 'function' ) { settingValue( ); continue }//exécute la function 
                stettingObject[ settingName ] = settingValue || true //mémorise value ou positionne le flag
                }
            }
        ///__ after setting __\\\
        try{ if ( settingOptions.after != undefined ) settingOptions.after.call( stettingObject )
            }catch ( e) { throw  new Error ("after error in settings") } 
        return stettingObject
        }///reply
