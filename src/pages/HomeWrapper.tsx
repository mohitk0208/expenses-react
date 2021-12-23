import ContentContainer from "../components/ContentContainer"
import Dashboard from "../components/Dashboard"

interface HomeWrapperProps {
  children: React.ReactNode
}

function HomeWrapper({ children }: HomeWrapperProps) {

  return (
    <div className="flex flex-col min-h-screen">
      <Dashboard />
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  )
}

export default HomeWrapper