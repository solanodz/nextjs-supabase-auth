"use client"

import { createClient } from '@/supabase/client'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const DemoClientComponent = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        async function getUser() {
            const supabase = createClient()

            const { data, error } = await supabase.auth.getUser();
            if (error || !data?.user) {
                console.log('No user found');
            } else {
                setUser(data.user)
            }
        }
        getUser();

    }, [])

    console.log({ user })

    return (
        <div>
            Client Component
        </div>
    )
}

