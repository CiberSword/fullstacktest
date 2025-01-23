## Aplicación Web creada con ReactJS!

Hola! En este archivo se describe la metodología a seguir para realizar la ejecución del proyecto frontend.

#### Requerimientos:

Para la ejecución del proyecto se requiere que el sistema cuente con:

- Node.

#### Pasos a seguir:

1. Ubicarse en la carpeta raiz del proyecto
    ```sh
    cd jarquin_frontend
    ```
2. Instalar las dependencias del proyecto mediante el comando:
    ```sh
    npm install
    ```
   Comenzará la descarga de las dependencias. Este proceso puede durar unos minutos dependiendo de tu conexión a internet.

3. Arrancar la aplicación con la siguiente instrucción:
    ```sh
    npm run dev
    ```

La aplicación se lanzará en el entorno local, y se podrá consultar en la siguiente url:
[http://localhost:5173/](http://localhost:5173/)

NOTA: En la raiz del proyecto se encuentra el archivo .env, donde se definió la variable:
``` VITE_API_BASE_URL=http://localhost:8080/api ```
Se asume que para el momento de la ejecución el backend se encuentre desplegado en local usando el puerto default.

@CiberSword, 2025
