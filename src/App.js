import PopupProvider from "./contexts/Popup"
import Page from "./pages/Page"

function App() {
  return (
    <PopupProvider>
      <Page />
    </PopupProvider>
  )
}

export default App;
