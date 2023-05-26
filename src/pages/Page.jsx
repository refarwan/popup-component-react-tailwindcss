import { usePopup } from "../contexts/Popup";

import PopupComponent from "../components/PopupComponent";

const Page = () => {
    const popup = usePopup()

    const showPopup = () => {
        popup.add(<PopupComponent />)
    }

    return (
        <main className="w-screen h-screen grid place-content-center">
            <button onClick={showPopup} className="bg-teal-700 text-white h-10 px-4 rounded-md">Show Popup</button>
        </main>
    )
}

export default Page