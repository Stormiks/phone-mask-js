import instInputMask from './plugin/index.js'

document.addEventListener("DOMContentLoaded", function(){
    const InputMask = new instInputMask();
    console.info('Install to lib', InputMask._libName)
    document.querySelector('input').focus();
})