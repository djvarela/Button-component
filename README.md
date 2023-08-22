# Button component


La UI de este challenger es abordado mediante la libreria de  *React*.

Tomando el concepto de Componente, el cual recibe dos Props.
Para la parte de iconos use el propuesto por devChallenges, que es el provisto por goole:

https://fonts.google.com/icons?hl=es-419

-icon

-type

Componente:
`<Button 
    icon={}  
    type={}
    />`


## Icons


Los iconos son tomando desde el fonts.google, y para poder hacer uso es necesario contar con un `<span>` donde se quiere renderizar el icono en cuestion con el `className='material-symbols-rounded'` y su `chilldren` el icono que se busca renderizar.

El componente tie un operador ternario, que en caso de no recibir la referencia del icono el `<span>` no se renderiza, caso contrario sí.

## Type

Para el caso de las medidas, sombras, borders y tamaños etc. Se utiliza las clases de `CSS` que envian como `props`

Por ejemplo: 

`<Button icon="shopping_cart" type="startIcon" />`

Tiene la clase `startIcon` posiciona el icon al principio y el texto luego
