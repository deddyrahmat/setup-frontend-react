import React from 'react'
import AInput from '../../atoms/AInput'
import AButton from '../../atoms/AButton'

type Data = {
    email : string,
    password : string,
    onChange : React.ChangeEventHandler<HTMLInputElement>,
    onSubmit : React.FormEventHandler<HTMLFormElement>,
    isLoading : boolean
}

function Login({email, password, onChange, onSubmit, isLoading} : Data) {
    return (
        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit} >
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <AInput onChange={onChange} value={email} type="email" name="email" id="email" placeholder='Your Email' />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <AInput onChange={onChange} value={password} type="password" name="password" id="password" placeholder='******' />
            </div>
            <AButton content={isLoading ? "Loading" : "Login"} />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
            </p>
        </form>
    )
}

export default Login