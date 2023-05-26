import { usePopup } from "../contexts/Popup"

const PopupComponent = () => {
    const popup = usePopup()

    return (
        <div className="bg-white p-8 rounded-md flex flex-col items-center w-96 gap-5 text-center">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quasi, consectetur autem, quidem blanditiis distinctio, officia unde quisquam voluptatibus magnam quibusdam error ea iste inventore eum sequi dolores voluptatem veniam.
            </p>
            <button onClick={popup.hide} className="bg-teal-700 text-white h-10 rounded-md px-4">Oke</button>
        </div>
    )
}

export default PopupComponent