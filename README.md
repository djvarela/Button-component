# Button component

The UI of this challenger is approached using the *React* library.

Taking the concept of a Component, which receives two Props.

For the icon part, use the one proposed by devChallenges, which is provided by Google:

[Google Icons](https://fonts.google.com/icons?hl=en)

- `icon`

- `type`

Component:


<Button 
    icon={}  
    type={}
/>


## Icons

The icons are taken from fonts.google, and in order to use them, it's necessary to have a `<span>` where the icon is intended to be rendered with the `className='material-symbols-rounded'`, and its `children` are the icon to be rendered.

The component has a ternary operator, which if it doesn't receive the icon reference, the `<span>` isn't rendered, otherwise, it is.

## Type

For cases like measurements, shadows, borders, sizes, etc., the `CSS` classes are used that are sent as `props`.

For example:


`<Button icon="shopping_cart" type="startIcon" />`


It has the `startIcon` class which positions the icon at the beginning and the text afterward. In the `icon` part, it takes the typical shopping cart icon in this case.
