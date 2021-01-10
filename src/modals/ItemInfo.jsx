import { useEffect, useState, useCallback, useContext } from 'react'
import { get, put, post } from '../Requests'
import { AuthContext } from '../context/auth'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export function SeeItemInfo(props) {

    const currentItem = props.item
    const usercontext = useContext(AuthContext)
    const [egenskap, setEgenskap] = useState(null)

    const fetchEgenskap = useCallback(
        async (ean, token) => {
        const url = `http://localhost:8080/vare/egenskap/${ean}`
        const response = await get(url, token)
        const data = response.json()
        setEgenskap(data)
        }, [])

    const plu = (item) => {
        return item.plu 
            ? item.plu
            : "finnes ikke..."
    }

    useEffect(
        () => {
            fetchEgenskap(currentItem.ean, usercontext.token)
        },[currentItem, usercontext, fetchEgenskap]
    )
    
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>{ currentItem.navn }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="item-pris">Pris: {currentItem.pris}</p>
                <p className="item-plu">PLU: {() => plu(currentItem)}</p>
                <p className="egenskap-beholdning">Beholdning: {egenskap.beholdning}</p>
                <p className="egenskap-presslager">Presslager: {egenskap.prestasjonslager}</p>
                <p className="egenskap-dekningsperiode">Dekningsperiode: {egenskap.dekningsperiode}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Lukk</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}