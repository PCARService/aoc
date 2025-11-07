Aplicación de Organización de Clases – AOC

Introducción
La Aplicación de Organización de Clases (AOC) es una aplicación propiamente dicha que cumple con una función muy básica a la vez que importante: organizar espacios. En este caso, nos enfocamos en abarcar una problemática vista en nuestro propio ámbito escolar (aunque si se quisiera, podría aplicarse en otros casos): las aulas de la institución no se encuentran asignadas según las necesidades de cada curso, es más, no existe sistema de asignación alguna; el que lo encuentra se lo queda. A raíz de esto, se presentan otros problemas como la falta de aulas, la rotación constante de los estudiantes, incomodidad por el espacio deficiente respecto a la cantidad de estudiantes, entre otros. Lo que busca AOC es acabar o reducir estas mismas cuestiones de la manera más eficiente posible, con simpleza y comodidad para todos.
Variables por considerar
1)	Aulas
•	Capacidad máxima de estudiantes.
•	Recursos disponibles (máquinas, herramientas, etc.).
•	Ubicación (piso, edificio).
•	Disponibilidad horaria.
2)	Cursos
•	Cantidad de estudiantes.
•	Horario de clases.
•	Necesidades especiales (laboratorio, computadoras, etc.).
3)	Horarios
•	Bloques de tiempo disponibles.
•	Conflictos de horarios entre cursos.
4)	Asignaciones
•	Relación entre curso, aula y horario.
•	Historial de asignaciones (para evitar repeticiones o mejorar la rotación).
5)	Restricciones
•	No sobrepasar la capacidad del aula.
•	No asignar dos cursos al mismo tiempo en el mismo aula.
•	Priorizar necesidades especiales.

¿Qué hacer si ningún aula cumple exactamente con los requisitos?
•	Buscar el aula más cercana al requisito: Si ningún aula tiene la capacidad suficiente, busca la que tenga la mayor capacidad disponible, aunque no sea suficiente, para minimizar el problema.
Criterios de selección: 
•	Capacidad más alta disponible: Elige el aula con los requisitos más cercanos, aunque no alcance la condición ideal.
•	Recursos más cercanos a lo solicitado: Si hay necesidades especiales, prioriza las aulas que más se acerquen a esos requerimientos.
•	Ubicación: Si hay varias opciones similares, puedes priorizar por cercanía a otras aulas o facilidad de acceso.

Notificación o advertencia:
•	Informa al usuario que no hay un aula que cumpla exactamente con los requisitos, pero que se ha asignado la mejor opción disponible.
Ideas para la interfaz gráfica
•	Pantalla principal: Un panel con resumen de aulas, cursos y asignaciones actuales.
•	Gestión de aulas: Lista de aulas con opción de agregar, editar o eliminar. Mostrar capacidad y recursos.
•	Gestión de cursos: Lista de cursos con número de estudiantes y necesidades. Opción de agregar, editar o eliminar.
•	Asignación de aulas: Un calendario o tabla donde puedas arrastrar y soltar cursos en aulas y horarios disponibles.
•	Alertas y sugerencias: Notificaciones si un aula está sobreocupada o si hay conflictos de horario.
•	Filtros y búsqueda: Para encontrar rápidamente aulas o cursos según criterios (capacidad, recursos, etc.).
•	Resumen visual: Gráficos o colores para identificar rápidamente aulas ocupadas, libres o con problemas.

Ejemplo de flujo en la aplicación
•	El usuario intenta asignar un curso a un aula.
•	El sistema revisa si hay alguna aula que cumpla con todos los requisitos.
•	Si no la hay, muestra una lista de las aulas más cercanas a los requisitos (por ejemplo, ordenadas por capacidad descendente).
•	El usuario puede elegir la opción sugerida o buscar otra alternativa.

En la interfaz gráfica
•	Mensaje de advertencia: Cuando no hay coincidencia exacta, muestra un mensaje como: “No hay aulas que cumplan con todos los requisitos. Estas son las opciones más cercanas:”.
•	Lista de sugerencias: Presenta las aulas ordenadas por cuán cerca están de cumplir con la necesidad (capacidad, recursos, etc.).
•	Botón para aceptar sugerencia o buscar manualmente.
