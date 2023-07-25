module.exports = {
    // Configuración de entorno
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    
    // Configuración de extensión
    extends: 'standard',
    
    // Sobrescribir la configuración para archivos específicos
    overrides: [
        {
            // Configuración específica para entorno Node.js
            env: {
                node: true
            },
            
            // Archivos para aplicar la configuración
            files: [
                '.eslintrc.{js,cjs}'
            ],
            
            // Opciones de análisis para archivos de tipo script
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    
    // Opciones de análisis generales
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    
    // Reglas personalizadas
    rules: {
        indent: ['error', 4],
        'space-before-function-paren': 'off'
    }
}
