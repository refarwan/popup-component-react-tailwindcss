import { createContext, useContext, useEffect, useState } from "react"

const popupContext = createContext()

export const usePopup = () => useContext(popupContext)

const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null)
    const [popupShow, setPopupShow] = useState(false)
    const [waitingPopup, setWaitingPopup] = useState([])

    const add = (component) => {
        if (!popup) setPopup(component)
        else setWaitingPopup([...waitingPopup, component])
    }

    useEffect(() => {
        if (popup) setPopupShow(true)
    }, [popup])

    const hide = () => {
        setPopupShow(false)

        setTimeout(() => {
            setPopup(null)
            if (waitingPopup.length) {
                setPopup(waitingPopup[0])
                setWaitingPopup(waitingPopup.slice(1))
            }
        }, 200);
    }

    return (
        <popupContext.Provider value={{ add, hide }}>
            {
                (popup || waitingPopup.length !== 0) &&
                <div onMouseDown={hide} className={`${popupShow ? "visible pt-0 opacity-[1]" : "invisible pt-[150vh] opacity-[0]"} transition-[2s] fixed w-screen h-screen bg-gray-950/20 z-50 flex justify-center items-center left-0 top-0`}>
                    {popup}
                </div>
            }
            {children}
        </popupContext.Provider>
    )
}

export default PopupProvider