# Posicionamiento en CSS
## `position: relative;`

- Puedo mover al elemento con 2 ejes de referencia:
  - top: cantidad de pixeles desde el extremo superior
  - left: cantidad de pixeles desde el extremo izquierdo
- Si el elemento es movido, su espacio original se respeta por los demás elementos
- Un elemento también puede tener `position:relative` cuando tiene hijos con `position:absolute` de tal forma que, dichos hijos, no se salgan del área del padre

## `position:absolute;`

- El elemento sale del contexto de los demás elementos(tiene el efecto de flotar sobre los demás elementos)
- Los elementos que no tienen `position:absolute` ocupan el espacio de éste elemento.
- Puedo mover al elemento con 4 ejes de referencia:
  - top, left, right y bottom
- Obligatoriamente, debemos especificar, al menos 2 ejes de referencia
- El elemento `absolute` se mueve con referencia al próximo padre directo que tenga `position:relative`
- De no cumplirse el anterior punto, el padre de referencia, sería el elemento HTML

## ```position:fixed;```

- El elemento es posicionado con referencia al Viewport( el área de visualización de la página)
- Es decir, si el scroll se mueve por ejemplo, el elemento se mantiene fijado con referencia al Viewport
- Se puede anclar hasta con 4 puntos de referencia: top, left, right y bottom