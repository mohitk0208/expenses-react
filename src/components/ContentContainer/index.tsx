import React from "react"
interface ContentContainerPropTypes {
  children?: React.ReactChild | React.ReactChildren
}


function ContentContainer({ children }: ContentContainerPropTypes) {

  return <div className="w-screen flex-[4]" >
    <div>
      {children}
    </div>
  </div>

}

export default ContentContainer