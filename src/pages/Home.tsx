import ContentContainer from "../components/ContentContainer"
import Dashboard from "../components/Dashboard"

function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Dashboard />
      <ContentContainer>
        This is Content area to contain categories and expenses
      </ContentContainer>
    </div>
  )
}

export default Home