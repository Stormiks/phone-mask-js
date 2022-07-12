# Модуль для установки маски ввода на поле, для ввода телефона

[![pipeline status](https://gitlab.com/skylinker/phone-mask-js/badges/public/pipeline.svg)](https://gitlab.com/skylinker/phone-mask-js/-/commits/public)

## Пример

```html
<html lang="ru">
  <head>
    <title>Mask Phone Input</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css-vendor/tailwind.css">

    <script type="text/javascript" src="./plugin/index.js"></script>
  </head>
  <body>
    <div class="wrapper flex items-center justify-center min-h-full">
      <input class="px-9 py-7 font-semibold text-2xl placeholder-gray-400 border-2 rounded-md" type="tel" data-tel-input placeholder="Телефон" maxlength="18" />
    </div>

    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", function(){
          const InputMask = new instInputMask();

          console.info('Install to lib', InputMask._libName)
          document.querySelector('input').focus();
      })
    </script>
  </body>
</html>

```
