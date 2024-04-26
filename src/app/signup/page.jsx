import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { signup } from './actions'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className='mx-auto'>
            <h2 className='text-center my-6 font-bold text-3xl tracking-tight'>Sign Up Page</h2>
            <form action="" className='max-w-lg mx-auto flex flex-col gap-3'>
                <div>
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input type="fullname" id="fullname" name="fullname" required />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" required />
                </div>
                <Button formAction={signup}>Sign Up</Button>
                <span className='text-muted-foreground text-sm tracking-tight text-center'>
                    Already have an account?
                    <Link href='/login' className={buttonVariants({ variant: 'link' })}> Log in Here.</Link>
                </span>
            </form>
        </div>
    )
}

export default LoginPage
