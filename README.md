## Configuración de la BD MySQL!

Hola! Este archivo describe el procedimiento para realizar la creación de una base de datos, una tabla y un usuario para realizar conexiones.

#### Requerimientos:

Para ejecutar el script se requiere contar con:

- MySQL Community Server (puerto default).
- Configuración de los binarios de MySQL en la variables de entorno PATH.

#### Pasos a seguir:

1. Cambiar a la ruta donde se encuentra el script jarquin_bd.sql
    ```sh
    cd bd
    ```
2. Iniciar sesión en la consola de MySQL con el usuario root (la contraseña se creó al instalar MySQL).
    ```sh
    mysql -u root -p
    ```
3. Ejecutar el script con el comando source:
    ```sh
    source jarquin_bd.sql
    ```
    
Tras finalizar estos pasos ya se contará con la BD preparada para su conexión con Spring Boot.
    
 @CiberSword, 2025
