"use client"

import SideDashboard from "./sideDashboard"
import { useState } from "react"

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState('dashboard');

  const handleSelectContent = (selectContent: any) => {
    setSelectedContent(selectContent);
  }
  return (
    <>
      <div className="bg-foreground w-2/12 pt-12 pl-5 absolute left-0 top-0 h-full">
        <SideDashboard onSelect={handleSelectContent} selectedOption={selectedContent}/>
      </div>
      <div className="w-10/12 right-0 absolute h-full pl-12 pt-32">
        {selectedContent === 'dashboard' && (
          <>
            <h1>Hello Dashboard!</h1>
          </>
        )}

        {selectedContent === 'estoque' && (
          <>
            <h1>Hello Estoque!</h1>
          </>
        )}
      </div>
    </>
  )
}

export default Dashboard