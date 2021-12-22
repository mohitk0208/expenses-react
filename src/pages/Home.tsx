import CategoriesContainer from "../components/CategoriesContainer"
import ContentContainer from "../components/ContentContainer"
import Dashboard from "../components/Dashboard"

function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Dashboard />
      <ContentContainer>
        <CategoriesContainer />
      </ContentContainer>
    </div>
  )
}

export default Home