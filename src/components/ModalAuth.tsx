import React from 'react'
import {useForm} from "react-hook-form";
import {banSymbols} from "./CheckValid";
import {userModel} from "../UserDescription";

// Объект, хранящий в себе валидные логин и пароль пользователя
let user: userModel = {
    login: '',
    password: ''
}

//Окно авторизации
//При нажатии кнопки "Next" указанные логин и пароль передаются объекту users
//Ввод проверяется на наличие символов, пустая строка спровоцирует ошибку
export function ModalAuth(){

    const {
        register,
        formState:{errors, isValid},
        handleSubmit,
        reset
    } = useForm<userModel>({
        mode: "onBlur"
    })
    const onSubmit = (data: userModel) => {
        alert(JSON.stringify(data))
        user = data
        reset()
        console.log('Login: ')
        console.log(user.login)
        console.log('Password: ')
        console.log(user.password)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <div
                className="fixed bg-black/50 right-0 top-0 left-0 bottom-0"
            />
                <div
                    className="window w-[500px] px-5 py-1 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
                >
                    <h1 className="title text-2xl text-center mb-2">Sign in</h1>
                    <label className="label">
                        Login:
                        <input
                            {...register('login', {
                                required: "The field must not be empty",
                                maxLength: {
                                    value: 20,
                                    message: "Login must include not more than 20 symbols"
                                },
                                minLength: {
                                    value: 5,
                                    message: "Login must include not less than 5 symbols"
                                },
                                validate: {
                                    message: banSymbols,
                                },
                            })}
                            type="text"
                            className="input"
                            placeholder="Enter the login..."
                        />
                    </label>
                    <div
                        style={{height: 15}}
                        className="error"
                    >
                        {errors?.login && <p>{errors?.login?.message?.toString() || "Error!"}</p>}
                    </div>
                    <label className="label">
                        Password:
                        <input
                            {...register('password', {
                                required: "The field must not be empty",
                                maxLength: {
                                    value: 20,
                                    message: "Password must include not more than 20 symbols"
                                },
                                minLength: {
                                    value: 5,
                                    message: "Password must include not less than 5 symbols"
                                },
                                validate: {
                                    message: banSymbols
                                }
                            })}
                            type="password"
                            className="input mb-2"
                            placeholder="Enter the password..."
                        />
                    </label>
                    <div
                        style={{height: 15}}
                        className="error"
                    >
                        {errors?.password && <p>{errors?.password?.message?.toString() || "Error!"}</p>}
                    </div>
                    <button
                        disabled={!isValid}
                        className="button"
                    >
                        Confirm
                    </button>
                </div>
        </form>
    )
}