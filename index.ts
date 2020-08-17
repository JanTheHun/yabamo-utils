import express from 'express'
import { ServerInstance } from './classes/server'
const config: any = {
    port: 3000,
    engineName: "engine_1",
    routes: [
        {
            path: '/',
            responses: {
                'default': 'yo'
            }
        }
    ],
    fallback: true
}
const server = new ServerInstance()

// mainAsync()
mainSync()

async function mainSync() {

    console.log('creating..')
    let createResult = server.createSync(config)
    if (createResult.error) {
        console.log('failed creating engine:', createResult.error)
    } else {
        console.log('success creating engine:', createResult.result)
    }

    console.log('starting..')
    let startResult = await server.start()
    console.log('started:', startResult)

    // let startResult = server.startSync(config)
    // if (startResult.error) {
    //     console.log('failed creating engine:', startResult.error)
    // } else {
    //     console.log('success creating engine:', startResult.result)
    // }
}

async function mainAsync() {

    try {
        let creation = await server.create(config)
        console.log(creation)
        let starting = await server.start()
        console.log(starting)
    } catch (err) {
        console.log('err:', err)
    }
}