const appName = "Input Phone Mask"
const version = "1.0.0"

class InputTelephon {
    #_eventsInput = ['focus', 'blur', 'keydown', 'input', 'paste']
    #_inputs = []
    #_regExpMask = /\D/g
    #_searchInputPattern = 'input[data-tel-input]'
    _libName = appName
    _version = version

    constructor(options = {}) {
        this.isInitInstance = Object.prototype.hasOwnProperty.call(options, 'init') ? options.init : true
        this._eventsInput = Object.prototype.hasOwnProperty.call(options, 'events') ? options.events : this._eventsInput
        this._inputs = Object.prototype.hasOwnProperty.call(options, 'fields') ? options.fields : this._inputs
        this._searchInputPattern = Object.prototype.hasOwnProperty.call(options, 'patternNodeInput') ? options.patternNodeInput : this._searchInputPattern

        if (this.isInitInstance)
            this.install()
    }

    set _inputs($nodes = []) {
        this.#_inputs = $nodes
    }

    get _inputs() {
        return this.#_inputs
    }

    get _eventsInput() {
        return this.#_eventsInput
    }

    set _eventsInput(arr = []) {
        this.#_eventsInput = arr
    }

    get _searchInputPattern() {
        return this.#_searchInputPattern
    }

    set _searchInputPattern(patternStr) {
        this.#_searchInputPattern = patternStr
    }

    get maskField() {
        return this.#_regExpMask
    }

    install() {
        if (!this._inputs.length) {
            this._inputs = document.querySelectorAll(this._searchInputPattern)
        }

        if (this._inputs.length)
            this.subscribeEventsOnTheInput()
    }

    getInputNumbersValue($field) {
        return $field.value.replace(this.maskField, '');
    }

    handlerKeydown(e) {
        const $fieldValue = e.target.value.replace(this.maskField, '');

        if (e.keyCode === 8 && $fieldValue.length === 1) {
            e.target.value = "";
        }
    }

    handlerFocus(e) {
        const $field = e.target;

        $field.placeholder = '+7 (999) 999-99-99'
    }

    handlerBlur(e) {
        const $field = e.target;

        $field.placeholder = 'Телефон'
    }

    handlerInput(e) {
        const $field = e.target;
        let inputNumbersValue = this.getInputNumbersValue($field);
        const selectionStart = $field.selectionStart;
        let formattedInputValue = "";

        if (!inputNumbersValue) return $field.value = "";

        if ($field.value.length != selectionStart) {
            if (e.data && this.maskField.test(e.data)) {
                $field.value = inputNumbersValue;
            }
            return;
        }


        if (["7", "8", "9"].includes(inputNumbersValue[0])) {
            if (inputNumbersValue[0] === "9") inputNumbersValue = `7${inputNumbersValue}`;

            let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";

            formattedInputValue = $field.value = `${firstSymbols} `;

            if (inputNumbersValue.length > 1) {
                formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue +=`-${inputNumbersValue.substring(7, 9)}`;
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
            }
        } else {
            formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
        }

        $field.value = formattedInputValue;
    }

    handlerPaste(e) {
        const $filed = e.target;
        const inputNumbersValue = getInputNumbersValue($filed);
        const pasted = e.clipboardData || window.clipboardData;

        if (pasted) {
            const pastedText = pasted.getData('Text');

            if (this.maskField.test(pastedText)) {
                $filed.value = inputNumbersValue;
                return;
            }
        }
    }

    getMethodAtInstance(nameEvent) {
        const formatFirstSymbolOfStr = nameEvent.slice(0,1).toUpperCase()
        const restOfTheLine = nameEvent.slice(1)
        const nameMethodAtClass = `handler${formatFirstSymbolOfStr}${restOfTheLine}`

        if (!this[nameMethodAtClass]) {
            return false
        } else {
            return this[nameMethodAtClass]
        }
    }

    subscribeEventsOnTheInput() {
        for (const $input of this._inputs) {
            if ($input.type !== 'tel') return

            for (const event of this._eventsInput) {
                const handlerMethod = this.getMethodAtInstance(event)

                if (typeof handlerMethod === 'function')
                    $input.addEventListener(event, handlerMethod.bind(this), false)
            }
        }
    }
}


export default InputTelephon
