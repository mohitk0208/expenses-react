import React from "react"
interface ContentContainerPropTypes {
  children?: React.ReactChild | React.ReactChildren
}


function ContentContainer({ children }: ContentContainerPropTypes) {

  return <div className="w-screen flex-[2] bg-blue-200" >
    <div>
      {children}
    </div>
  </div>

}

export default ContentContainer