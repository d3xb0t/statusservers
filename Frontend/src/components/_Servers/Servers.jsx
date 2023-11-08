import './Servers.css'
import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton'
import { IcOutlineRemoveCircle, IcRoundUpload } from '../../assets/icons.jsx'

async function fetchServers() {
    const query = await fetch('http://localhost:8080/api/v1/serverstatusapp/getstatus')
    const statusServers = await query.json()
    return statusServers
}

async function _deleteServer(_id) {
    const _body = {
        id: _id
    }
    const response = await fetch(`http://localhost:8080/api/v1/serverstatusapp/deleteserver`, {
        method: 'delete',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(_body)
    })
    return response
}

async function postServer(server) {
    const body = {
        url: server,
        port: 80
    }
    const response = await fetch(`http://localhost:8080/api/v1/serverstatusapp/postserver`, {
        method: 'post',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
    return response
}

export const Servers = () => {
    const [servers, setServers] = useState([])
    const [flag, setFlag] = useState(false)
    const [server, setServer] = useState('')
    const [x, setX] = useState(false)

    const handleChange = event => {
        setServer(event.target.value)
    }
    const post = (e) => {
        e.preventDefault()
        postServer(server)
        setServer("")
        setX(true)
    }

    useEffect(function() {
            fetchServers().then((fetchedServers) => setServers(fetchedServers))
        }, [flag, x])
    return(
        <>
            <div className='inputServer'>
                <input id='server' name='server' onChange={handleChange} value={server} className='input' type="text" />
                <IconButton onClick={post}>
                    <IcRoundUpload className="submit_icon"/>
                </IconButton>
            </div>
            <div className='servers'>
            <ul>
                {servers.map(server => (
                    <li className='server' style={server.status=="online"?{backgroundColor: "#00FF7F"}:{backgroundColor: "rgba(128, 128, 128, 0.37)"}} key={server.url}>url:{server.url} status:{server.status} <IcOutlineRemoveCircle className='delete_icon' onClick={
                            (e) => {
                            e.preventDefault()
                            _deleteServer(server.id)
                            setFlag(true)
                        }
                        
                    }/></li>
                ))}
            </ul>
                
        </div>
        </>
    )
}