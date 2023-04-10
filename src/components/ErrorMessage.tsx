import React from 'react'
interface ErrorMessageProps{
    error: string
}
//Функция вывода ошибки
export function ErrorMessage({error}: ErrorMessageProps){
    return (
        <p className="error">{error}</p>
    )
}
