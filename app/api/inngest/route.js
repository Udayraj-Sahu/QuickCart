import {serve} from 'inngest/next'
import {inngest, syncUserCreation, syncUserDeletion, syncUserUpdation} from '@/config/inngest'

export const {GET,POST,PUT} = server({
    client : inngest,
    function: [
       syncUserCreation,
       syncUserUpdation,
       syncUserDeletion,
    ],
})