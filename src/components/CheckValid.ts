//Функция проверки данных на валдность(проверяет на наличие недопустимых символов)
export function banSymbols (input: string){

    let banned_symbols = ['/', '&', '?', '\\', '|', ' ', '/', '*']

    for(let i = 0; i < banned_symbols.length; ++i) {

        for(let j = 0; j < banned_symbols.length; ++j){

            if(input[i] == banned_symbols[j]){

                return "The field cannot contain symbols like: '/', '&', '?', '\', '|', ' ', '/', '*'"

            }
        }

    }
}