import { useEffect, useCallback } from 'react'
import {SeeItemInfo} from './modals/ItemInfo'

function OppgaveOptions(props) {

    const task = props.task
    const item = props.item

    const renderOption = useCallback(
        (option) => {
        switch (option) {
            case "iteminfo":
                return <SeeItemInfo item={item} />;
            default:
        }
    }, [item])

    const render = useCallback(
        () => {
            if (item !== null) {
                return (
                    <div className="taskoption-itemoptions">
                        <ul className="itemoptions-ul">
                            <li className="itemoptions-li" onClick={() => renderOption("iteminfo")}>
                                Se vareinformasjon
                            </li>
                        </ul>
                    </div>
                )
            }
            else if (task !== null) {
                return (
                    <div className="taskoption-taskoptions">
                        <ul>
                            <li>Options her...</li>
                        </ul>
                    </div>
                )
            }
            else {
                return (
                    <div className="taskoption-nooptions">
                        <p className="nooptions-info">Ingen oppgave eller vare valgt...</p>
                    </div>
                )
            }
        }, [task, item, renderOption]
    )

    useEffect(
        () => {
            render()
        }, [task, item, render]
    )
    return (
        render()
    )
}

export default OppgaveOptions